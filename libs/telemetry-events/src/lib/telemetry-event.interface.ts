/**
 * Événement publié par buddy-ingest sur Redis Streams après validation.
 * Contient le payload brut normalisé + métadonnées d'ingestion.
 * Consommé par buddy-analysis.
 */
export interface TelemetryEvent {
  /** Identifiant unique du device */
  deviceId: string;
  /** Timestamp de la mesure (horloge device, Unix ms) */
  recordedAt: number;
  /** Timestamp de réception par le serveur (Unix ms) */
  receivedAt: number;
  /** Coordonnées GPS [latitude, longitude] */
  gps?: [number, number];
  /** Fréquence cardiaque (bpm) */
  heartRate?: number;
  /** Magnitude accéléromètre */
  acceleration?: number;
  /** Niveau batterie (%) */
  battery?: number;
}

/** Clé du topic Redis Streams */
export const TELEMETRY_STREAM_KEY = 'stream:telemetry';
