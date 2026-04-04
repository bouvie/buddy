/**
 * Types de notification supportés.
 * Chaque type correspond à une règle du Rule Engine.
 */
export enum NotificationType {
  GEOFENCE_BREACH    = 'GEOFENCE_BREACH',
  HEART_RATE_ALERT   = 'HEART_RATE_ALERT',
  SIGNAL_LOST        = 'SIGNAL_LOST',
  UNUSUAL_ACTIVITY   = 'UNUSUAL_ACTIVITY',
  UNUSUAL_LOCATION   = 'UNUSUAL_LOCATION',
  LOW_BATTERY        = 'LOW_BATTERY',
}

/**
 * Événement publié par buddy-analysis vers buddy-notify.
 * Contient l'intention de notification — pas le message final.
 * Le service de notification est responsable du formatage.
 */
export interface NotificationEvent {
  type: NotificationType;
  /** ID de l'utilisateur destinataire (résolu depuis deviceId par buddy-analysis) */
  userId: string;
  /** ID du device concerné */
  deviceId: string;
  /** Timestamp de l'événement déclencheur (Unix ms) */
  triggeredAt: number;
  /** Données contextuelles spécifiques au type de notification */
  context: Record<string, unknown>;
}

/** Clé du topic Redis Streams */
export const NOTIFICATION_STREAM_KEY = 'stream:notifications';
