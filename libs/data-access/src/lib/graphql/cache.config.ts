import { InMemoryCache } from '@apollo/client/core';

export function createApolloCache(): InMemoryCache {
  return new InMemoryCache({
    typePolicies: {
      Dog:            { keyFields: ['id'] },
      SleepPoint:     { keyFields: ['date'] },
      LocationPoint:  { keyFields: false },
      HeartRatePoint: { keyFields: false },
    },
  });
}
