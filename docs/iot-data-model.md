# IoT Data Model — TimescaleDB

Schema de la base de données d'acquisition et lib `telemetry-data-access`.

## Connexion

```
Host     : localhost:5432
Database : buddy
User     : buddy / buddy_dev
```

## Hypertable `telemetry`

Table principale des mesures brutes. Partitionnée par `recorded_at` (7 jours / chunk).

```sql
CREATE TABLE telemetry (
  device_id    TEXT        NOT NULL,
  recorded_at  TIMESTAMPTZ NOT NULL,  -- horloge device
  received_at  TIMESTAMPTZ NOT NULL,  -- horloge serveur
  latitude     DOUBLE PRECISION,
  longitude    DOUBLE PRECISION,
  heart_rate   SMALLINT,
  acceleration REAL,
  battery      SMALLINT,
  UNIQUE (device_id, recorded_at)
);
```

**Politiques :**
- Compression : données > 7 jours (ratio ~10:1)
- Rétention : 90 jours (données brutes)

## Continuous Aggregates

### `telemetry_hourly`

Baseline par heure — utilisée par le Rule Engine Tier 2.
Calculée automatiquement par TimescaleDB. Rétention : 1 an.

```sql
AVG(heart_rate), MAX(heart_rate), MIN(heart_rate)
AVG(acceleration), MAX(acceleration)
COUNT(*) AS sample_count
MIN(battery)
```

### `telemetry_daily`

Score d'activité journalier. Rétention : 2 ans.

## Repository API

```typescript
// Écriture — buddy-ingest
insertBatch(rows: TelemetryRow[]): Promise<void>
// Idempotent — ON CONFLICT (device_id, recorded_at) DO NOTHING

// Lecture — buddy-analysis
findRecent(deviceId: string, limit?: number): Promise<TelemetryRow[]>
findHourlyBaseline(deviceId: string, hours?: number): Promise<TelemetryHourlyRow[]>
```

## Règles de requête

- **Toujours filtrer par `device_id` + plage `recorded_at`** — active le pruning TimescaleDB
- **Utiliser `telemetry_hourly` pour les baselines** — pas de calcul à la volée sur `telemetry`
- **`recorded_at` = source de vérité temporelle** — `received_at` = audit serveur uniquement

## Module NestJS

```typescript
TelemetryDataAccessModule.forRoot({
  host, port, database, user, password
})
// Global true — TelemetryRepository injectable partout dans le module
```
