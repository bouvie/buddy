import { TelemetryEvent } from '@buddy/telemetry-events';
import { TelemetryHourlyRow } from '@buddy/telemetry-data-access';
import { NotificationEvent } from '@buddy/notification-contracts';

/**
 * Règle Tier 2 — Contextuelle, peut effectuer des lectures DB.
 * Évaluée de façon asynchrone après Tier 1.
 * Utilisée pour les anomalies relatives à l'historique du device.
 *
 * Exemples : activité inhabituelle (vs baseline), localisation inhabituelle,
 * fréquence cardiaque anormale pour CE chien (vs sa normale).
 */
export interface Tier2Rule {
  readonly name: string;
  evaluate(event: TelemetryEvent, context: Tier2Context): Promise<NotificationEvent | null>;
}

export interface Tier2Context {
  /** ID utilisateur associé au device */
  userId: string;
  /** Baseline horaire des dernières 24h */
  hourlyBaseline: TelemetryHourlyRow[];
}
