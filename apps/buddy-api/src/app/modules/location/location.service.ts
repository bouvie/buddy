import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { LocationPoint } from '@buddy/shared';
import { LOCATION_PUB_SUB } from './location.tokens';

const LOCATION_UPDATED = 'LOCATION_UPDATED';

// Mock : 326 Boulevard du Redon, 13009 Marseille — migré depuis MapLocationDirective
const BASE_LOCATION: Omit<LocationPoint, 'timestamp'> = {
  lat:     43.245347,
  lng:     5.426638,
  address: '326 Bd du Redon, 13009 Marseille',
};

@Injectable()
export class LocationService implements OnModuleInit, OnModuleDestroy {
  private intervalId: ReturnType<typeof setInterval> | undefined;

  constructor(@Inject(LOCATION_PUB_SUB) private readonly pubSub: PubSub) {}

  onModuleInit(): void {
    this.intervalId = setInterval(() => {
      this.pubSub.publish(LOCATION_UPDATED, {
        location: { ...BASE_LOCATION, timestamp: new Date().toISOString() },
      });
    }, 1000);
  }

  getCurrent(): LocationPoint {
    return { ...BASE_LOCATION, timestamp: new Date().toISOString() };
  }

  // dogId réservé pour le filtrage multi-chiens
  liveIterator(_dogId: string): AsyncIterableIterator<{ location: LocationPoint }> {
    return this.pubSub.asyncIterableIterator<{ location: LocationPoint }>(LOCATION_UPDATED);
  }

  onModuleDestroy(): void {
    clearInterval(this.intervalId);
  }
}
