import { Injectable } from '@nestjs/common';
import { Dog } from '@buddy/reading-contracts';

const MOCK_DOGS: Dog[] = [
  { id: '1', name: 'Buddy' },
];

@Injectable()
export class DogService {
  findOne(id: string): Dog | null {
    return MOCK_DOGS.find(d => d.id === id) ?? null;
  }
}
