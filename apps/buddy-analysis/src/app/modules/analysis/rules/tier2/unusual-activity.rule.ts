import { Tier2Rule, Tier2Context } from '@buddy/rules-engine';
import { TelemetryEvent } from '@buddy/telemetry-events';
import { NotificationEvent, NotificationType } from '@buddy/notification-contracts';

/**
 * Détecte une activité inhabituellement basse comparée à la baseline horaire.
 * Seuil : accélération moyenne < 50% de la baseline des dernières 24h.
 *
 * Requiert au moins 3 buckets horaires pour être fiable.
 */
export class UnusualActivityRule implements Tier2Rule {
  readonly name = 'UnusualActivityRule';
  private readonly DEVIATION_THRESHOLD = 0.5;
  private readonly MIN_BASELINE_BUCKETS = 3;

  async evaluate(event: TelemetryEvent, context: Tier2Context): Promise<NotificationEvent | null> {
    if (event.acceleration === undefined) return null;
    if (context.hourlyBaseline.length < this.MIN_BASELINE_BUCKETS) return null;

    const avgBaseline =
      context.hourlyBaseline
        .filter((b) => b.avgAcceleration !== null)
        .reduce((sum, b) => sum + (b.avgAcceleration ?? 0), 0) /
      context.hourlyBaseline.length;

    if (avgBaseline === 0) return null;

    const deviation = event.acceleration / avgBaseline;

    if (deviation < this.DEVIATION_THRESHOLD) {
      return {
        type: NotificationType.UNUSUAL_ACTIVITY,
        userId: context.userId,
        deviceId: event.deviceId,
        triggeredAt: event.recordedAt,
        context: {
          currentAcceleration: event.acceleration,
          baselineAvg: avgBaseline,
          deviationRatio: deviation,
        },
      };
    }

    return null;
  }
}
