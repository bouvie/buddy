import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { DeviceBatch } from '@buddy/device-contracts';
import { IngestService } from '../ingest/ingest.service';

/**
 * Souscrit au broker EMQX et route les messages vers IngestService.
 * Topic convention : devices/{deviceId}/telemetry
 */
@Injectable()
export class MqttService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(MqttService.name);
  private client!: mqtt.MqttClient;

  private readonly brokerUrl =
    process.env['MQTT_BROKER_URL'] ?? 'mqtt://localhost:1883';

  constructor(private readonly ingestService: IngestService) {}

  onModuleInit(): void {
    this.client = mqtt.connect(this.brokerUrl, {
      clientId: `buddy-ingest-${Date.now()}`,
      clean: true,
      reconnectPeriod: 5000,
    });

    this.client.on('connect', () => {
      this.logger.log(`Connected to MQTT broker at ${this.brokerUrl}`);
      this.client.subscribe('devices/+/telemetry', (err) => {
        if (err) this.logger.error('MQTT subscribe error', err);
      });
    });

    this.client.on('message', (topic: string, payload: Buffer) => {
      this.handleMessage(topic, payload);
    });

    this.client.on('error', (err) => this.logger.error('MQTT error', err));
  }

  onModuleDestroy(): void {
    this.client?.end();
  }

  private handleMessage(topic: string, payload: Buffer): void {
    try {
      const batch = JSON.parse(payload.toString()) as DeviceBatch;
      this.ingestService.processBatch(batch).catch((err) =>
        this.logger.error(`Failed to process batch from ${topic}`, err),
      );
    } catch {
      this.logger.warn(`Invalid payload on topic ${topic}`);
    }
  }
}
