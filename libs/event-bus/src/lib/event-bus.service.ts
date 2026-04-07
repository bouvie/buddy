import { Injectable, Inject, OnModuleDestroy, OnModuleInit, Logger } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';

/**
 * Abstraction Redis Streams pour publish / consume inter-services.
 * buddy-ingest publie, buddy-analysis consomme.
 * Ne contient aucun type de payload — les contrats vivent dans telemetry-events
 * et notification-contracts.
 */
@Injectable()
export class EventBusService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(EventBusService.name);
  private client!: RedisClientType;

  constructor(@Inject('EVENT_BUS_OPTIONS') private readonly options: { host: string; port: number }) {}

  async onModuleInit(): Promise<void> {
    await this.connect();
  }

  async connect(): Promise<void> {
    this.client = createClient({
      socket: { host: this.options.host, port: this.options.port },
    }) as RedisClientType;
    this.client.on('error', (err) => this.logger.error('Redis error', err));
    await this.client.connect();
    this.logger.log(`Connected to Redis at ${this.options.host}:${this.options.port}`);
  }

  async publish(streamKey: string, payload: Record<string, string>): Promise<void> {
    await this.client.xAdd(streamKey, '*', payload);
  }

  async onModuleDestroy(): Promise<void> {
    await this.client?.quit();
  }
}
