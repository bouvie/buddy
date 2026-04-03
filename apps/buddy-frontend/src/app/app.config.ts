import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { routes } from './app.routes';
import { GOOGLE_MAPS_API_KEY, provideK9Charts } from '@buddy/ui';
import { createApolloOptions } from '@buddy/data-access';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideK9Charts(),
    { provide: GOOGLE_MAPS_API_KEY, useValue: environment.googleMapsApiKey },
    provideApollo(createApolloOptions(environment.graphqlHttpUrl, environment.graphqlWsUrl)),
  ],
};
