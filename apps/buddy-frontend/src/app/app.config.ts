import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { routes } from './app.routes';
import { GOOGLE_MAPS_API_KEY } from '@buddy/ui';
import { createApolloOptions } from '@buddy/graphql-client';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
{ provide: GOOGLE_MAPS_API_KEY, useValue: environment.googleMapsApiKey },
    provideApollo(createApolloOptions(environment.graphqlHttpUrl, environment.graphqlWsUrl)),
  ],
};
