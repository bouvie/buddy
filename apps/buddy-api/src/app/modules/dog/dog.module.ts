import { Module } from '@nestjs/common';
import { DogResolver } from './dog.resolver';
import { DogService } from './dog.service';
import { HealthModule } from '../health/health.module';
import { LocationModule } from '../location/location.module';

@Module({
  imports: [HealthModule, LocationModule],
  providers: [DogResolver, DogService],
})
export class DogModule {}
