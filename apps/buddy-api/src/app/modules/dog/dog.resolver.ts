import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Dog, HeartRatePoint, SleepPoint, LocationPoint } from '@buddy/reading-contracts';
import { DogService } from './dog.service';
import { HealthService } from '../health/health.service';
import { LocationService } from '../location/location.service';

@Resolver('Dog')
export class DogResolver {
  constructor(
    private readonly dogService: DogService,
    private readonly healthService: HealthService,
    private readonly locationService: LocationService,
  ) {}

  @Query('dog')
  dog(@Args('id') id: string): Dog | null {
    return this.dogService.findOne(id);
  }

  @ResolveField('lastLocation')
  async lastLocation(@Parent() dog: Dog): Promise<LocationPoint> {
    return this.locationService.getCurrent(this.dogService.getDeviceId(dog.id));
  }

  @ResolveField('heartRateSeries')
  async heartRateSeries(@Parent() dog: Dog, @Args('last') last = 30): Promise<HeartRatePoint[]> {
    return this.healthService.getHeartRateSeries(this.dogService.getDeviceId(dog.id), last);
  }

  @ResolveField('sleepSeries')
  sleepSeries(@Parent() _dog: Dog, @Args('last') last = 7): SleepPoint[] {
    return this.healthService.getSleepSeries(last);
  }
}
