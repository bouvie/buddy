import { inject } from '@angular/core';
import { ApolloClient, split } from '@apollo/client/core';
import { getMainDefinition } from '@apollo/client/utilities';
import { HttpLink } from 'apollo-angular/http';
import { createApolloCache } from './cache.config';
import { createWsLink } from './ws-link.config';

export function createApolloOptions(
  httpUrl: string,
  wsUrl: string,
): () => ApolloClient.Options {
  return (): ApolloClient.Options => {
    const httpLink = inject(HttpLink);

    const http = httpLink.create({ uri: httpUrl });
    const ws = createWsLink(wsUrl);

    const link = split(
      ({ query }) => {
        const def = getMainDefinition(query);
        return def.kind === 'OperationDefinition' && def.operation === 'subscription';
      },
      ws,
      http,
    );

    return {
      link,
      cache: createApolloCache(),
      defaultOptions: {
        watchQuery: { fetchPolicy: 'cache-and-network' },
        query: { fetchPolicy: 'network-only' },
      },
    };
  };
}
