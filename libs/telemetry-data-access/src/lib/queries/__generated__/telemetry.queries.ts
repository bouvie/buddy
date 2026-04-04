/**
 * FICHIER GÉNÉRÉ — ne pas modifier manuellement.
 * Généré par pgTyped depuis src/lib/queries/telemetry.sql.
 *
 * Pour regénérer :
 *   docker compose -f docker/docker-compose.yml up -d
 *   nx run telemetry-data-access:pgtyped
 *
 * Ce stub est commité uniquement comme fallback IDE.
 * pgTyped l'écrase avec les types exacts inférés de la DB réelle.
 */
import { PreparedQuery } from '@pgtyped/runtime';

// ── InsertTelemetryBatch ────────────────────────────────────────────────────

export interface IInsertTelemetryBatchParams {
  deviceIds:    string[];
  recordedAts:  Date[];
  receivedAts:  Date[];
  latitudes:    (number | null)[];
  longitudes:   (number | null)[];
  heartRates:   (number | null)[];
  accelerations:(number | null)[];
  batteries:    (number | null)[];
}

export interface IInsertTelemetryBatchResult {
  /** INSERT retourne void */
}

export const insertTelemetryBatch = new PreparedQuery<
  IInsertTelemetryBatchParams,
  IInsertTelemetryBatchResult
>(`
  INSERT INTO telemetry
    (device_id, recorded_at, received_at, latitude, longitude, heart_rate, acceleration, battery)
  SELECT * FROM UNNEST(
    $1::text[], $2::timestamptz[], $3::timestamptz[],
    $4::float8[], $5::float8[], $6::int2[], $7::float4[], $8::int2[]
  )
  ON CONFLICT (device_id, recorded_at) DO NOTHING
`);

// ── FindRecent ──────────────────────────────────────────────────────────────

export interface IFindRecentParams {
  deviceId: string;
  limit: number;
}

export interface IFindRecentResult {
  device_id:    string;
  recorded_at:  Date;
  received_at:  Date;
  latitude:     number | null;
  longitude:    number | null;
  heart_rate:   number | null;
  acceleration: number | null;
  battery:      number | null;
}

export const findRecent = new PreparedQuery<IFindRecentParams, IFindRecentResult>(`
  SELECT device_id, recorded_at, received_at, latitude, longitude, heart_rate, acceleration, battery
  FROM telemetry
  WHERE device_id = $1
  ORDER BY recorded_at DESC
  LIMIT $2
`);

// ── FindHourlyBaseline ──────────────────────────────────────────────────────

export interface IFindHourlyBaselineParams {
  deviceId: string;
  hours: number;
}

export interface IFindHourlyBaselineResult {
  device_id:        string;
  bucket:           Date;
  avg_heart_rate:   number | null;
  max_heart_rate:   number | null;
  avg_acceleration: number | null;
  sample_count:     number | null;
}

export const findHourlyBaseline = new PreparedQuery<
  IFindHourlyBaselineParams,
  IFindHourlyBaselineResult
>(`
  SELECT device_id, bucket,
    avg_heart_rate::float, max_heart_rate, avg_acceleration::float, sample_count::int
  FROM telemetry_hourly
  WHERE device_id = $1
    AND bucket >= NOW() - ($2::int * INTERVAL '1 hour')
  ORDER BY bucket DESC
`);
