import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import {
  insertTelemetryBatch,
  findRecent,
  findHourlyBaseline,
} from './queries/__generated__/telemetry.queries';

export interface TelemetryRow {
  deviceId: string;
  recordedAt: Date;
  receivedAt: Date;
  latitude?: number;
  longitude?: number;
  heartRate?: number;
  acceleration?: number;
  battery?: number;
}

export interface TelemetryHourlyRow {
  deviceId: string;
  bucket: Date;
  avgHeartRate: number | null;
  maxHeartRate: number | null;
  avgAcceleration: number | null;
  sampleCount: number;
}

/**
 * Repository TimescaleDB pour l'hypertable telemetry.
 * Les requêtes SQL sont dans src/lib/queries/telemetry.sql.
 * Les types sont générés par pgTyped au build (non commités).
 * pgTyped runtime utilise des prepared statements PostgreSQL —
 * le plan d'exécution est caché par PostgreSQL dès le premier appel.
 */
@Injectable()
export class TelemetryRepository {
  constructor(private readonly pool: Pool) {}

  /**
   * Insère un batch de mesures via UNNEST — une seule requête quel que soit le volume.
   * Idempotent : ON CONFLICT (device_id, recorded_at) DO NOTHING.
   */
  async insertBatch(rows: TelemetryRow[]): Promise<void> {
    if (rows.length === 0) return;

    await insertTelemetryBatch.run(
      {
        deviceIds:   rows.map((r) => r.deviceId),
        recordedAts: rows.map((r) => r.recordedAt),
        receivedAts: rows.map((r) => r.receivedAt),
        latitudes:   rows.map((r) => r.latitude   ?? null) as number[],
        longitudes:  rows.map((r) => r.longitude  ?? null) as number[],
        heartRates:  rows.map((r) => r.heartRate  ?? null) as number[],
        accelerations: rows.map((r) => r.acceleration ?? null) as number[],
        batteries:   rows.map((r) => r.battery    ?? null) as number[],
      },
      this.pool,
    );
  }

  /**
   * Dernières N mesures d'un device (contexte Tier 2).
   */
  async findRecent(deviceId: string, limit = 100): Promise<TelemetryRow[]> {
    const rows = await findRecent.run({ deviceId, limit }, this.pool);

    return rows.map((r) => ({
      deviceId:     r.device_id,
      recordedAt:   r.recorded_at,
      receivedAt:   r.received_at,
      latitude:     r.latitude    ?? undefined,
      longitude:    r.longitude   ?? undefined,
      heartRate:    r.heart_rate  ?? undefined,
      acceleration: r.acceleration ?? undefined,
      battery:      r.battery     ?? undefined,
    }));
  }

  /**
   * Baseline horaire sur les N dernières heures.
   * Utilise le continuous aggregate telemetry_hourly.
   */
  async findHourlyBaseline(deviceId: string, hours = 24): Promise<TelemetryHourlyRow[]> {
    const rows = await findHourlyBaseline.run({ deviceId, hours }, this.pool);

    return rows.map((r) => ({
      deviceId:        r.device_id ?? '',
      bucket:          r.bucket ?? new Date(),
      avgHeartRate:    r.avg_heart_rate   ?? null,
      maxHeartRate:    r.max_heart_rate   ?? null,
      avgAcceleration: r.avg_acceleration ?? null,
      sampleCount:     r.sample_count     ?? 0,
    }));
  }
}
