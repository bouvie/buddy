import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GOOGLE_MAPS_API_KEY, provideK9Charts } from '@buddy/ui';

// Remplacer par votre clé Google Maps API
const MAPS_API_KEY = '';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideK9Charts(),
    { provide: GOOGLE_MAPS_API_KEY, useValue: MAPS_API_KEY },
  ],
};
