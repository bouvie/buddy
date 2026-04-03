import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { LocationResolver } from './location.resolver';
import { LocationService } from './location.service';
import { LOCATION_PUB_SUB } from './location.tokens';

@Module({
  providers: [
    { provide: LOCATION_PUB_SUB, useFactory: () => new PubSub() },
    LocationResolver,
    LocationService,
  ],
  exports: [LocationService],
})
export class LocationModule {}
