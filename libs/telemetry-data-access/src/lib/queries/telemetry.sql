/*
 * Buddy — Telemetry queries
 * pgTyped génère les types TypeScript depuis ces requêtes au build.
 * Fichiers générés : ./queries/__generated__/telemetry.queries.ts (non commité)
 */

/* @name InsertTelemetryBatch */
INSERT INTO telemetry
  (device_id, recorded_at, received_at, latitude, longitude, heart_rate, acceleration, battery)
SELECT * FROM UNNEST(
  :deviceIds::text[],
  :recordedAts::timestamptz[],
  :receivedAts::timestamptz[],
  :latitudes::float8[],
  :longitudes::float8[],
  :heartRates::int2[],
  :accelerations::float4[],
  :batteries::int2[]
)
ON CONFLICT (device_id, recorded_at) DO NOTHING;


/* @name FindRecent */
SELECT
  device_id,
  recorded_at,
  received_at,
  latitude,
  longitude,
  heart_rate,
  acceleration,
  battery
FROM telemetry
WHERE device_id = :deviceId
ORDER BY recorded_at DESC
LIMIT :limit;


/* @name FindHourlyBaseline */
SELECT
  device_id,
  bucket,
  avg_heart_rate::float  AS avg_heart_rate,
  max_heart_rate,
  avg_acceleration::float AS avg_acceleration,
  sample_count::int
FROM telemetry_hourly
WHERE device_id = :deviceId
  AND bucket >= NOW() - (:hours::int * INTERVAL '1 hour')
ORDER BY bucket DESC;
