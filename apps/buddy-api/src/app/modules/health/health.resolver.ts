import { Resolver, Subscription, Args } from '@nestjs/graphql';
import { HealthService } from './health.service';

@Resolver()
export class HealthResolver {
  constructor(private readonly healthService: HealthService) {}

  @Subscription('heartRate')
  heartRate(@Args('dogId') dogId: string) {
    return this.healthService.liveIterator(dogId);
  }
}
