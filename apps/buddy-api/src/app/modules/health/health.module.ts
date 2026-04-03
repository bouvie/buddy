import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { HealthResolver } from './health.resolver';
import { HealthService } from './health.service';
import { HEALTH_PUB_SUB } from './health.tokens';

@Module({
  providers: [
    { provide: HEALTH_PUB_SUB, useFactory: () => new PubSub() },
    HealthResolver,
    HealthService,
  ],
  exports: [HealthService],
})
export class HealthModule {}
