import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import { TelemetryEvent, TELEMETRY_STREAM_KEY } from '@buddy/telemetry-events';
import { AnalysisService } from '../analysis/analysis.service';

/**
 * Consomme le stream Redis Streams telemetry publié par buddy-ingest.
 * Consumer group "analysis" — permet plusieurs instances en parallèle.
 *
 * En cas d'erreur d'analyse, le message est acquitté pour éviter le retraitement
 * infini. Les erreurs sont loggées pour investigation.
 */
@Injectable()
export class ConsumerService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(ConsumerService.name);
  private client!: RedisClientType;
  private running = false;
  private intervalId?: ReturnType<typeof setInterval>;

  private readonly CONSUMER_GROUP = 'analysis';
  private readonly CONSUMER_NAME  = `analysis-${process.env['HOSTNAME'] ?? Date.now()}`;

  constructor(private readonly analysisService: AnalysisService) {}

  async onModuleInit(): Promise<void> {
    this.client = createClient({
      socket: {
        host: process.env['REDIS_HOST'] ?? 'localhost',
        port: parseInt(process.env['REDIS_PORT'] ?? '6379', 10),
      },
    }) as RedisClientType;

    this.client.on('error', (err) => this.logger.error('Redis consumer error', err));
    await this.client.connect();

    await this.ensureConsumerGroup();
    this.running = true;
    this.intervalId = setInterval(() => { void this.poll(); }, 100);
    this.logger.log('Consumer started — polling telemetry stream');
  }

  onModuleDestroy(): void {
    this.running = false;
    if (this.intervalId) clearInterval(this.intervalId);
    void this.client?.quit();
  }

  private async ensureConsumerGroup(): Promise<void> {
    try {
      await this.client.xGroupCreate(TELEMETRY_STREAM_KEY, this.CONSUMER_GROUP, '0', { MKSTREAM: true });
    } catch {
      // Le groupe existe déjà — normal au redémarrage
    }
  }

  private async poll(): Promise<void> {
    if (!this.running) return;

    const messages = await this.client.xReadGroup(
      this.CONSUMER_GROUP,
      this.CONSUMER_NAME,
      [{ key: TELEMETRY_STREAM_KEY, id: '>' }],
      { COUNT: 10, BLOCK: 0 },
    );

    if (!messages) return;

    for (const stream of messages) {
      for (const { id, message } of stream.messages) {
        try {
          const event = JSON.parse(message['payload']) as TelemetryEvent;
          await this.analysisService.analyze(event);
          await this.client.xAck(TELEMETRY_STREAM_KEY, this.CONSUMER_GROUP, id);
        } catch (err) {
          this.logger.error(`Failed to process message ${id}`, err);
          await this.client.xAck(TELEMETRY_STREAM_KEY, this.CONSUMER_GROUP, id);
        }
      }
    }
  }
}
