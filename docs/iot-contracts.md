# IoT Contracts

Contrats TypeScript entre les services du pipeline IoT Buddy.

## Vue d'ensemble

```
[Bracelet] ──DeviceBatch──▶ [buddy-ingest] ──TelemetryEvent──▶ [buddy-analysis] ──NotificationEvent──▶ [buddy-notify]
              MQTT                           Redis Streams                          Redis Streams
```

## libs/device-contracts — `scope:acquisition`

**Format MQTT du bracelet → buddy-ingest.**
Clés courtes pour minimiser la taille payload (NB-IoT/LTE-M).

```typescript
interface DeviceBatch {
  did: string;           // deviceId
  r: DeviceMetric[];     // batch de mesures
}

interface DeviceMetric {
  ts: number;            // Unix ms, horloge device (source de vérité)
  gps?: [number, number]; // [latitude, longitude]
  hr?: number;           // fréquence cardiaque (bpm)
  acc?: number;          // magnitude accéléromètre
  bat?: number;          // batterie (%)
}
```

Topic MQTT : `devices/{deviceId}/telemetry`

## libs/telemetry-events — `scope:events`

**Event Redis Streams ingest → analysis.**
Noms complets — pas de contrainte taille, priorité lisibilité.

```typescript
interface TelemetryEvent {
  deviceId: string;
  recordedAt: number;    // horloge device — source de vérité temporelle
  receivedAt: number;    // horloge serveur — audit uniquement
  gps?: [number, number];
  heartRate?: number;
  acceleration?: number;
  battery?: number;
}

const TELEMETRY_STREAM_KEY = 'stream:telemetry';
```

## libs/notification-contracts — `scope:events`

**Event Redis Streams analysis → notify.**

```typescript
enum NotificationType {
  GEOFENCE_BREACH    = 'GEOFENCE_BREACH',
  HEART_RATE_ALERT   = 'HEART_RATE_ALERT',
  SIGNAL_LOST        = 'SIGNAL_LOST',
  UNUSUAL_ACTIVITY   = 'UNUSUAL_ACTIVITY',
  UNUSUAL_LOCATION   = 'UNUSUAL_LOCATION',
  LOW_BATTERY        = 'LOW_BATTERY',
}

interface NotificationEvent {
  type: NotificationType;
  userId: string;
  deviceId: string;
  triggeredAt: number;
  context: Record<string, unknown>;
}

const NOTIFICATION_STREAM_KEY = 'stream:notifications';
```

## libs/event-bus — `scope:events`

Client Redis Streams injectable via NestJS. Aucun type de payload — transport pur.

```typescript
EventBusModule.forRoot({ host, port })  // dans AppModule
EventBusService.publish(streamKey, payload)  // dans les services
```

## Règles d'évolution

- Modifier `DeviceBatch` = coordination firmware device requise
- Modifier `TelemetryEvent` = migration ingest + analysis (même repo)
- Ajouter un `NotificationType` = ajouter la règle correspondante dans buddy-analysis
- Tout nouveau champ = nullable par défaut
