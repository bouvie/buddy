import { Resolver, Subscription, Args } from '@nestjs/graphql';
import { LocationService } from './location.service';

@Resolver()
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Subscription('location')
  location(@Args('dogId') dogId: string) {
    return this.locationService.liveIterator(dogId);
  }
}
