import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { LocationPoint } from '@buddy/reading-contracts';
import { TelemetryReadRepository } from '@buddy/telemetry-monitoring-data-access';
import { LOCATION_PUB_SUB } from './location.tokens';

const LOCATION_UPDATED = 'LOCATION_UPDATED';

// Position de repli si le device n'a pas encore envoyé de données GPS.
const FALLBACK_LOCATION: Omit<LocationPoint, 'timestamp'> = {
  lat:     43.245347,
  lng:     5.426638,
  address: '326 Bd du Redon, 13009 Marseille',
};

@Injectable()
export class LocationService implements OnModuleInit, OnModuleDestroy {
  private intervalId: ReturnType<typeof setInterval> | undefined;

  constructor(
    @Inject(LOCATION_PUB_SUB) private readonly pubSub: PubSub,
    private readonly telemetryReadRepository: TelemetryReadRepository,
  ) {}

  onModuleInit(): void {
    // TODO: remplacer par un consumer Redis Streams quand la couche subscription sera câblée.
    this.intervalId = setInterval(async () => {
      const point = await this.getCurrent('sim-001');
      this.pubSub.publish(LOCATION_UPDATED, { location: point });
    }, 1000);
  }

  /**
   * Dernière position GPS connue du device depuis TimescaleDB.
   * Retourne la position de repli si aucune donnée GPS n'est disponible.
   */
  async getCurrent(deviceId: string): Promise<LocationPoint> {
    const rows = await this.telemetryReadRepository.findRecentForDevice(deviceId, 10);
    const latest = rows.find((r) => r.latitude != null && r.longitude != null);

    if (latest) {
      return {
        lat:       latest.latitude!,
        lng:       latest.longitude!,
        timestamp: latest.recordedAt.toISOString(),
        address:   null,
      };
    }

    return { ...FALLBACK_LOCATION, timestamp: new Date().toISOString() };
  }

  liveIterator(_dogId: string): AsyncIterableIterator<{ location: LocationPoint }> {
    return this.pubSub.asyncIterableIterator<{ location: LocationPoint }>(LOCATION_UPDATED);
  }

  onModuleDestroy(): void {
    clearInterval(this.intervalId);
  }
}
