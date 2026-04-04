# IoT Acquisition — buddy-ingest

Service d'acquisition IoT. Responsabilité unique : recevoir, valider, stocker, publier.

## Architecture

```
apps/buddy-ingest/
  src/app/
    app.module.ts              ← EventBus + TimescaleDB + modules
    modules/
      device-auth/
        device-auth.guard.ts   ← Validation X-Device-Key header
        device-auth.module.ts
      mqtt/
        mqtt.service.ts        ← Connexion EMQX, souscription topics
        mqtt.module.ts
      ingest/
        ingest.service.ts      ← Validate → Write → Publish
        ingest.module.ts
```

## Flow

```
MQTT topic: devices/{deviceId}/telemetry
  │
  ▼ MqttService.handleMessage()
  │ JSON.parse → DeviceBatch
  ▼ IngestService.processBatch()
  │ 1. Valider (did, r)
  │ 2. DeviceMetric[] → TelemetryRow[]
  │ 3. telemetryRepository.insertBatch() → TimescaleDB (idempotent)
  │ 4. eventBus.publish(TELEMETRY_STREAM_KEY) → Redis Streams
  ▼ done
```

## Dépendances

```typescript
import { DeviceBatch } from '@buddy/device-contracts';   // scope:acquisition
import { TelemetryRepository } from '@buddy/telemetry-data-access'; // scope:events
import { EventBusService } from '@buddy/event-bus';     // scope:events
import { TelemetryEvent, TELEMETRY_STREAM_KEY } from '@buddy/telemetry-events'; // scope:events
```

## Invariants

- **Zéro logique métier** dans IngestService — pas de règles, pas d'interprétation
- **Payload invalide** → warn + skip (ne jamais lever d'exception qui couperait MQTT)
- **Reconnexion MQTT automatique** toutes les 5s
- **Side effects dans `onModuleInit`** — jamais dans le constructeur

## Port : 3001
