import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { HeartRatePoint, SleepPoint } from '@buddy/shared';
import { HEALTH_PUB_SUB } from './health.tokens';

const HEART_RATE_UPDATED = 'HEART_RATE_UPDATED';
const BASE_BPM = 78;

// Migré depuis HeartRateChartDirective — mêmes 3 composantes de variabilité cardiaque canine
function nextBpm(prev: number, tick: number): number {
  const rsa       = Math.sin((tick * 2 * Math.PI) / 3) * 4;
  const hrv       = (Math.random() - 0.5) * 3;
  const reversion = (BASE_BPM - prev) * 0.06;
  return Math.round(Math.max(60, Math.min(105, prev + rsa * 0.4 + hrv + reversion)));
}

// Heures de sommeil sur 7 jours — dates générées dynamiquement au démarrage
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
  private lastBpm = BASE_BPM;
  private tick    = 0;
  private intervalId: ReturnType<typeof setInterval> | undefined;
  private readonly sleepMock = buildSleepMock();

  constructor(@Inject(HEALTH_PUB_SUB) private readonly pubSub: PubSub) {}

  onModuleInit(): void {
    this.intervalId = setInterval(() => {
      this.tick++;
      this.lastBpm = nextBpm(this.lastBpm, this.tick);
      this.pubSub.publish(HEART_RATE_UPDATED, {
        heartRate: { timestamp: new Date().toISOString(), bpm: this.lastBpm },
      });
    }, 1000);
  }

  // Génère `last` points historiques pour pré-remplir la sliding window frontend
  getHeartRateSeries(last: number): HeartRatePoint[] {
    const points: HeartRatePoint[] = [];
    let bpm = BASE_BPM;
    const now = Date.now();
    for (let i = last - 1; i >= 0; i--) {
      bpm = nextBpm(bpm, i);
      points.push({ timestamp: new Date(now - i * 1000).toISOString(), bpm });
    }
    return points;
  }

  getSleepSeries(last: number): SleepPoint[] {
    return this.sleepMock.slice(-last);
  }

  // dogId réservé pour le filtrage multi-chiens
  liveIterator(_dogId: string): AsyncIterableIterator<{ heartRate: HeartRatePoint }> {
    return this.pubSub.asyncIterableIterator<{ heartRate: HeartRatePoint }>(HEART_RATE_UPDATED);
  }

  onModuleDestroy(): void {
    clearInterval(this.intervalId);
  }
}
