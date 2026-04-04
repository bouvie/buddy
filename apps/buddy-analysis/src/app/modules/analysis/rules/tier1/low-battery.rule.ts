import { Tier1Rule, Tier1Context } from '@buddy/rules-engine';
import { TelemetryEvent } from '@buddy/telemetry-events';
import { NotificationEvent, NotificationType } from '@buddy/notification-contracts';

/**
 * Alerte si la batterie passe sous le seuil configuré.
 * Seuil par défaut : 10%.
 */
export class LowBatteryRule implements Tier1Rule {
  readonly name = 'LowBatteryRule';

  evaluate(event: TelemetryEvent, context: Tier1Context): NotificationEvent | null {
    if (event.battery === undefined) return null;
    if (event.battery > context.batteryThreshold) return null;

    return {
      type: NotificationType.LOW_BATTERY,
      userId: context.userId,
      deviceId: event.deviceId,
      triggeredAt: event.recordedAt,
      context: { battery: event.battery, threshold: context.batteryThreshold },
    };
  }
}
