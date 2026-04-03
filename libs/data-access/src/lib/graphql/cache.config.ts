import { InMemoryCache } from '@apollo/client/core';

/**
 * Type policies à définir entité par entité quand le schéma GraphQL est connu.
 * Ne pas anticiper les keyFields avant que le data model soit stabilisé.
 */
export function createApolloCache(): InMemoryCache {
  return new InMemoryCache();
}
