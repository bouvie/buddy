import { Injectable } from '@nestjs/common';
import { Dog } from '@buddy/reading-contracts';

const MOCK_DOGS: Dog[] = [
  { id: '1', name: 'Buddy' },
];

// Mapping dog GraphQL id → device MQTT id.
// TODO: persister cette association en base (onboarding device).
const DOG_DEVICE_MAP: Record<string, string> = {
  '1': 'sim-001',
};

@Injectable()
export class DogService {
  findOne(id: string): Dog | null {
    return MOCK_DOGS.find(d => d.id === id) ?? null;
  }

  getDeviceId(dogId: string): string {
    return DOG_DEVICE_MAP[dogId] ?? dogId;
  }
}
