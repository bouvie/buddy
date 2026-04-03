import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

export function createWsLink(wsUrl: string): GraphQLWsLink {
  return new GraphQLWsLink(
    createClient({
      url: wsUrl,
      retryAttempts: 5,
      shouldRetry: () => true,
      on: {
        connected: () => console.debug('[WS] Connected'),
        error: (err) => console.error('[WS] Error', err),
        closed: () => console.debug('[WS] Closed'),
      },
      // connectionParams: () => ({ Authorization: `Bearer ${getToken()}` })
      // À brancher quand l'authentification est implémentée
    }),
  );
}
