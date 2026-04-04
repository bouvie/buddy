import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

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

export interface TelemetryDailyRow {
  deviceId: string;
  bucket: Date;
  avgHeartRate: number | null;
  avgAcceleration: number | null;
  sampleCount: number;
  minBattery: number | null;
}

@Injectable()
export class TelemetryReadRepository {
  constructor(private readonly pool: Pool) {}

  /**
   * Dernières `limit` mesures d'un device depuis l'hypertable telemetry.
   * Utilisé pour heartRateSeries et lastLocation côté buddy-api.
   */
  async findRecentForDevice(deviceId: string, limit = 30): Promise<TelemetryRow[]> {
    const { rows } = await this.pool.query<{
      device_id: string;
      recorded_at: Date;
      received_at: Date;
      latitude: number | null;
      longitude: number | null;
      heart_rate: number | null;
      acceleration: number | null;
      battery: number | null;
    }>(
      `SELECT device_id, recorded_at, received_at, latitude, longitude, heart_rate, acceleration, battery
       FROM telemetry
       WHERE device_id = $1
       ORDER BY recorded_at DESC
       LIMIT $2`,
      [deviceId, limit],
    );

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
   * Résumés journaliers depuis le continuous aggregate telemetry_daily.
   * Utilisé pour sleepSeries côté buddy-api.
   */
  async findDailySummary(deviceId: string, days = 7): Promise<TelemetryDailyRow[]> {
    const { rows } = await this.pool.query<{
      device_id: string;
      bucket: Date;
      avg_heart_rate: number | null;
      avg_acceleration: number | null;
      sample_count: number | null;
      min_battery: number | null;
    }>(
      `SELECT device_id, bucket,
              avg_heart_rate::float   AS avg_heart_rate,
              avg_acceleration::float AS avg_acceleration,
              sample_count::int,
              min_battery::int
       FROM telemetry_daily
       WHERE device_id = $1
         AND bucket >= NOW() - ($2::int * INTERVAL '1 day')
       ORDER BY bucket DESC`,
      [deviceId, days],
    );

    return rows.map((r) => ({
      deviceId:        r.device_id,
      bucket:          r.bucket,
      avgHeartRate:    r.avg_heart_rate    ?? null,
      avgAcceleration: r.avg_acceleration  ?? null,
      sampleCount:     r.sample_count      ?? 0,
      minBattery:      r.min_battery       ?? null,
    }));
  }
}
