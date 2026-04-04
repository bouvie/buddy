/**
 * Payload envoyé par le bracelet via MQTT.
 * Format compact — clés courtes pour minimiser la taille (NB-IoT / LTE-M).
 * Toutes les métriques sont optionnelles : le device envoie ce qu'il a.
 */
export interface DeviceMetric {
  /** Timestamp de la mesure sur le device (Unix ms, UTC) */
  ts: number;
  /** Coordonnées GPS [latitude, longitude] */
  gps?: [number, number];
  /** Fréquence cardiaque (bpm) */
  hr?: number;
  /** Magnitude accéléromètre */
  acc?: number;
  /** Niveau batterie (%) */
  bat?: number;
}

/**
 * Batch de mesures — le device bufferise et envoie par lots.
 * Idempotence : (deviceId + ts) est la clé de déduplication côté ingest.
 */
export interface DeviceBatch {
  /** Identifiant unique du device (bracelet) */
  did: string;
  /** Lot de mesures horodatées */
  r: DeviceMetric[];
}
