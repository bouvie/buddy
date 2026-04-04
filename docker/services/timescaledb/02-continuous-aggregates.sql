-- ============================================================
-- Buddy — TimescaleDB Continuous Aggregates
-- Baselines calculées en continu pour le Rule Engine Tier 2
-- ============================================================

-- ── Activité horaire (fenêtre 1h) ────────────────────────────
-- Utilisée par buddy-analysis pour détecter les anomalies d'activité
CREATE MATERIALIZED VIEW IF NOT EXISTS telemetry_hourly
WITH (timescaledb.continuous) AS
SELECT
  device_id,
  time_bucket('1 hour', recorded_at) AS bucket,
  AVG(heart_rate)    AS avg_heart_rate,
  MAX(heart_rate)    AS max_heart_rate,
  MIN(heart_rate)    AS min_heart_rate,
  AVG(acceleration)  AS avg_acceleration,
  MAX(acceleration)  AS max_acceleration,
  COUNT(*)           AS sample_count,
  MIN(battery)       AS min_battery
FROM telemetry
GROUP BY device_id, bucket
WITH NO DATA;

SELECT add_continuous_aggregate_policy('telemetry_hourly',
  start_offset => INTERVAL '3 hours',
  end_offset   => INTERVAL '1 hour',
  schedule_interval => INTERVAL '1 hour',
  if_not_exists => TRUE
);

-- ── Baseline journalière (fenêtre 24h) ───────────────────────
-- Utilisée pour le score d'activité et la détection d'anomalies long terme
CREATE MATERIALIZED VIEW IF NOT EXISTS telemetry_daily
WITH (timescaledb.continuous) AS
SELECT
  device_id,
  time_bucket('1 day', recorded_at) AS bucket,
  AVG(heart_rate)    AS avg_heart_rate,
  AVG(acceleration)  AS avg_acceleration,
  COUNT(*)           AS sample_count,
  MIN(battery)       AS min_battery
FROM telemetry
GROUP BY device_id, bucket
WITH NO DATA;

SELECT add_continuous_aggregate_policy('telemetry_daily',
  start_offset => INTERVAL '3 days',
  end_offset   => INTERVAL '1 day',
  schedule_interval => INTERVAL '1 day',
  if_not_exists => TRUE
);

-- Rétention des agrégats (conservés 1 an)
SELECT add_retention_policy('telemetry_hourly', INTERVAL '1 year', if_not_exists => TRUE);
SELECT add_retention_policy('telemetry_daily',  INTERVAL '2 years', if_not_exists => TRUE);
