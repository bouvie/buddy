# IoT Analysis — buddy-analysis

Service d'analyse IoT. Consomme les TelemetryEvent, évalue les règles, publie les notifications.

## Architecture

```
apps/buddy-analysis/
  src/app/
    app.module.ts                   ← EventBus + TimescaleDB + modules
    modules/
      consumer/
        consumer.service.ts         ← Redis Streams consumer group "analysis"
        consumer.module.ts
      analysis/
        analysis.service.ts         ← Orchestration Tier1 → Tier2
        analysis.module.ts
        rules/
          tier1/
            geofence.rule.ts        ← GEOFENCE_BREACH
            heart-rate-threshold.rule.ts ← HEART_RATE_ALERT
            low-battery.rule.ts     ← LOW_BATTERY
          tier2/
            unusual-activity.rule.ts ← UNUSUAL_ACTIVITY
      notification/
        notification.service.ts     ← Publish → NOTIFICATION_STREAM_KEY
        notification.module.ts

libs/rules-engine/
  src/lib/
    tier1.rule.interface.ts         ← Tier1Rule, Tier1Context
    tier2.rule.interface.ts         ← Tier2Rule, Tier2Context
```

## Flow

```
Redis Streams (stream:telemetry)
  consumer group: "analysis"
  │
  ▼ ConsumerService.poll() — toutes les 100ms
  │ xReadGroup → TelemetryEvent
  ▼ AnalysisService.analyze(event)
  │
  ├─ Tier 1 (synchrone, <5ms)
  │   GeofenceRule / HeartRateThresholdRule / LowBatteryRule
  │   → NotificationService.send() → Redis Streams
  │
  └─ Tier 2 (asynchrone, DB)
      findHourlyBaseline(deviceId, 24h)
      UnusualActivityRule
      → NotificationService.send() → Redis Streams
```

## Ajouter une règle Tier 1

```typescript
// 1. Créer le fichier
export class MyRule implements Tier1Rule {
  readonly name = 'MyRule';
  evaluate(event: TelemetryEvent, context: Tier1Context): NotificationEvent | null {
    // ...
  }
}
// 2. Ajouter dans AnalysisService.tier1Rules[]
```

## Ajouter une règle Tier 2

```typescript
export class MyTier2Rule implements Tier2Rule {
  readonly name = 'MyTier2Rule';
  async evaluate(event: TelemetryEvent, context: Tier2Context): Promise<NotificationEvent | null> {
    // context.hourlyBaseline disponible
  }
}
// Ajouter dans AnalysisService.tier2Rules[]
```

## TODO V2

- Charger `Tier1Context` (geofences, seuils) depuis DB au démarrage + cache invalidation
- Résoudre `userId` depuis `deviceId` (dog-data-access — hors scope V1)
- Extraire buddy-notify comme app séparée si les canaux de notification divergent

## Port : 3002
