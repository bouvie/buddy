-- ============================================================
-- Buddy — TimescaleDB Schema
-- Extension TimescaleDB activée automatiquement par l'image
-- ============================================================

CREATE EXTENSION IF NOT EXISTS timescaledb;

-- ── Telemetry ────────────────────────────────────────────────
-- Table principale des mesures brutes reçues des bracelets.
-- (deviceId, recordedAt) = clé de déduplication idempotente.
CREATE TABLE IF NOT EXISTS telemetry (
  device_id    TEXT        NOT NULL,
  recorded_at  TIMESTAMPTZ NOT NULL,  -- horloge device (source of truth)
  received_at  TIMESTAMPTZ NOT NULL,  -- horloge serveur (audit)
  latitude     DOUBLE PRECISION,
  longitude    DOUBLE PRECISION,
  heart_rate   SMALLINT,              -- bpm
  acceleration REAL,                  -- magnitude accéléromètre
  battery      SMALLINT,              -- %

  -- Contrainte d'idempotence : même mesure = pas de doublon
  UNIQUE (device_id, recorded_at)
);

-- Hypertable TimescaleDB — partition par recorded_at (7 jours / chunk)
SELECT create_hypertable('telemetry', 'recorded_at', if_not_exists => TRUE);

-- Index sur device_id pour les requêtes par device
CREATE INDEX IF NOT EXISTS idx_telemetry_device_id ON telemetry (device_id, recorded_at DESC);

-- Politique de compression (données > 7 jours)
ALTER TABLE telemetry SET (
  timescaledb.compress,
  timescaledb.compress_orderby = 'recorded_at DESC',
  timescaledb.compress_segmentby = 'device_id'
);

SELECT add_compression_policy('telemetry', INTERVAL '7 days', if_not_exists => TRUE);

-- Politique de rétention (données brutes conservées 90 jours)
SELECT add_retention_policy('telemetry', INTERVAL '90 days', if_not_exists => TRUE);
