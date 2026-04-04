import { Injectable, Logger } from '@nestjs/common';
import { DeviceBatch } from '@buddy/device-contracts';
import { TelemetryRepository, TelemetryRow } from '@buddy/telemetry-data-access';
import { EventBusService } from '@buddy/event-bus';
import { TelemetryEvent, TELEMETRY_STREAM_KEY } from '@buddy/telemetry-events';

/**
 * Responsabilité unique : valider → écrire TimescaleDB → publier sur event bus.
 * Pas d'intelligence métier — aucune règle, aucune interprétation.
 *
 * Ordre d'opération :
 * 1. Valider le batch (format, champs requis)
 * 2. Normaliser DeviceBatch → TelemetryRow[]
 * 3. Écrire TimescaleDB (idempotent, ON CONFLICT DO NOTHING)
 * 4. Publier TelemetryEvent sur Redis Streams (un event par mesure)
 */
@Injectable()
export class IngestService {
  private readonly logger = new Logger(IngestService.name);

  constructor(
    private readonly telemetryRepository: TelemetryRepository,
    private readonly eventBus: EventBusService,
  ) {}

  async processBatch(batch: DeviceBatch): Promise<void> {
    if (!batch.did || !Array.isArray(batch.r) || batch.r.length === 0) {
      this.logger.warn('Invalid batch received — skipped');
      return;
    }

    const receivedAt = new Date();

    const rows: TelemetryRow[] = batch.r.map((metric) => ({
      deviceId:     batch.did,
      recordedAt:   new Date(metric.ts),
      receivedAt,
      latitude:     metric.gps?.[0],
      longitude:    metric.gps?.[1],
      heartRate:    metric.hr,
      acceleration: metric.acc,
      battery:      metric.bat,
    }));

    await this.telemetryRepository.insertBatch(rows);

    for (const metric of batch.r) {
      const event: TelemetryEvent = {
        deviceId:     batch.did,
        recordedAt:   metric.ts,
        receivedAt:   receivedAt.getTime(),
        gps:          metric.gps,
        heartRate:    metric.hr,
        acceleration: metric.acc,
        battery:      metric.bat,
      };

      await this.eventBus.publish(TELEMETRY_STREAM_KEY, {
        payload: JSON.stringify(event),
      });
    }

    this.logger.debug(`Processed ${rows.length} metrics from device ${batch.did}`);
  }
}
