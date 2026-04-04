/** Mesure brute telle que persistée dans l'hypertable telemetry */
export interface TelemetryRow {
  deviceId: string;
  recordedAt: Date;
  receivedAt: Date;
  latitude?: number;
  longitude?: number;
  heartRate?: number;
  acceleration?: number;
  battery?: number;
}

/** Agrégat horaire depuis la vue telemetry_hourly */
export interface TelemetryHourlyRow {
  deviceId: string;
  bucket: Date;
  avgHeartRate: number | null;
  maxHeartRate: number | null;
  avgAcceleration: number | null;
  sampleCount: number;
}

/** Agrégat journalier depuis la vue telemetry_daily */
export interface TelemetryDailyRow {
  deviceId: string;
  bucket: Date;
  avgHeartRate: number | null;
  avgAcceleration: number | null;
  sampleCount: number;
  minBattery: number | null;
}
