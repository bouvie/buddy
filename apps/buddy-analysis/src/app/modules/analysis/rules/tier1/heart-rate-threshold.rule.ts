import { Tier1Rule, Tier1Context } from '@buddy/rules-engine';
import { TelemetryEvent } from '@buddy/telemetry-events';
import { NotificationEvent, NotificationType } from '@buddy/notification-contracts';

/**
 * Alerte si la FC dépasse le seuil absolu configuré dans Tier1Context.
 * Le seuil par défaut est 180 bpm (configurable).
 */
export class HeartRateThresholdRule implements Tier1Rule {
  readonly name = 'HeartRateThresholdRule';

  evaluate(event: TelemetryEvent, context: Tier1Context): NotificationEvent | null {
    if (event.heartRate === undefined) return null;
    if (event.heartRate <= context.heartRateThreshold) return null;

    return {
      type: NotificationType.HEART_RATE_ALERT,
      userId: context.userId,
      deviceId: event.deviceId,
      triggeredAt: event.recordedAt,
      context: { heartRate: event.heartRate, threshold: context.heartRateThreshold },
    };
  }
}
