import { TelemetryEvent } from '@buddy/telemetry-events';
import { NotificationEvent } from '@buddy/notification-contracts';

/**
 * Règle Tier 1 — Stateless, évaluée sur le payload seul, sans accès DB.
 * Doit être synchrone et extrêmement rapide (<5ms).
 *
 * Exemples : geofence breach, seuil FC absolu, perte de signal, batterie faible.
 *
 * Les données contextuelles (geofences, seuils) sont chargées en mémoire
 * au démarrage via le contexte injecté, pas lues en DB à chaque évaluation.
 */
export interface Tier1Rule {
  readonly name: string;
  evaluate(event: TelemetryEvent, context: Tier1Context): NotificationEvent | null;
}

export interface Tier1Context {
  /** Seuil de FC au-delà duquel une alerte est déclenchée */
  heartRateThreshold: number;
  /** Seuil de batterie en-dessous duquel une alerte est déclenchée (%) */
  batteryThreshold: number;
  /** Polygone de la zone autorisée [lat, lng][] — null si pas de geofence configurée */
  geofencePolygon: [number, number][] | null;
  /** ID utilisateur associé au device */
  userId: string;
}
