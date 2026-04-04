import { Tier1Rule, Tier1Context } from '@buddy/rules-engine';
import { TelemetryEvent } from '@buddy/telemetry-events';
import { NotificationEvent, NotificationType } from '@buddy/notification-contracts';

/**
 * Détecte si le device a quitté la zone autorisée (geofence polygonale).
 * Algorithme ray-casting — O(n) sur les sommets du polygone.
 */
export class GeofenceRule implements Tier1Rule {
  readonly name = 'GeofenceRule';

  evaluate(event: TelemetryEvent, context: Tier1Context): NotificationEvent | null {
    if (!event.gps || !context.geofencePolygon) return null;

    const [lat, lng] = event.gps;
    if (!this.isInsidePolygon(lat, lng, context.geofencePolygon)) {
      return {
        type: NotificationType.GEOFENCE_BREACH,
        userId: context.userId,
        deviceId: event.deviceId,
        triggeredAt: event.recordedAt,
        context: { latitude: lat, longitude: lng },
      };
    }

    return null;
  }

  private isInsidePolygon(lat: number, lng: number, polygon: [number, number][]): boolean {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
      const [xi, yi] = polygon[i];
      const [xj, yj] = polygon[j];
      const intersect = yi > lng !== yj > lng && lat < ((xj - xi) * (lng - yi)) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }
}
