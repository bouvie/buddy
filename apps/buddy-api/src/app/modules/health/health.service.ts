import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { HeartRatePoint, SleepPoint } from '@buddy/reading-contracts';
import { TelemetryReadRepository } from '@buddy/telemetry-monitoring-data-access';
import { HEALTH_PUB_SUB } from './health.tokens';

const HEART_RATE_UPDATED = 'HEART_RATE_UPDATED';

// Heures de sommeil sur 7 jours — mock statique jusqu'à l'implémentation de la détection de sommeil.
// Le schéma TimescaleDB actuel ne contient pas de données de sommeil (telemetry_daily = activité).
const SLEEP_HOURS = [7.2, 6.5, 8.1, 5.8, 6.9, 9.0, 8.4];

function buildSleepMock(): SleepPoint[] {
  const today = new Date();
  return SLEEP_HOURS.map((hours, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (SLEEP_HOURS.length - 1 - i));
    return { date: d.toISOString().split('T')[0], hours };
  });
}

@Injectable()
export class HealthService implements OnModuleInit, OnModuleDestroy {
  private intervalId: ReturnType<typeof setInterval> | undefined;
  private readonly sleepMock = buildSleepMock();

  constructor(
    @Inject(HEALTH_PUB_SUB) private readonly pubSub: PubSub,
    private readonly telemetryReadRepository: TelemetryReadRepository,
  ) {}

  onModuleInit(): void {
    // La subscription live heartRate est alimentée par les dernières mesures DB.
    // Cadence 1s — même fréquence que le simulateur ingest.
    this.intervalId = setInterval(async () => {
      // TODO: remplacer par un consumer Redis Streams quand la couche subscription sera câblée.
      // Pour l'instant on lit la dernière mesure en DB pour alimenter la subscription.
      const rows = await this.telemetryReadRepository.findRecentForDevice('sim-001', 1);
      const latest = rows[0];
      if (latest?.heartRate != null) {
        this.pubSub.publish(HEART_RATE_UPDATED, {
          heartRate: { timestamp: latest.recordedAt.toISOString(), bpm: latest.heartRate },
        });
      }
    }, 1000);
  }

  /**
   * Dernières `last` mesures de fréquence cardiaque depuis TimescaleDB.
   * Retourne un tableau vide si le device n'a pas encore envoyé de données.
   */
  async getHeartRateSeries(deviceId: string, last: number): Promise<HeartRatePoint[]> {
    const rows = await this.telemetryReadRepository.findRecentForDevice(deviceId, last);
    return rows
      .filter((r) => r.heartRate != null)
      .map((r) => ({ timestamp: r.recordedAt.toISOString(), bpm: r.heartRate! }));
  }

  getSleepSeries(last: number): SleepPoint[] {
    return this.sleepMock.slice(-last);
  }

  liveIterator(_dogId: string): AsyncIterableIterator<{ heartRate: HeartRatePoint }> {
    return this.pubSub.asyncIterableIterator<{ heartRate: HeartRatePoint }>(HEART_RATE_UPDATED);
  }

  onModuleDestroy(): void {
    clearInterval(this.intervalId);
  }
}
