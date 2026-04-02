import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart, BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

import { routes } from './app.routes';
import { GOOGLE_MAPS_API_KEY } from './design-system';

echarts.use([LineChart, BarChart, GridComponent, TooltipComponent, CanvasRenderer]);

// Remplacer par votre clé Google Maps API
const MAPS_API_KEY = '';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideEchartsCore({ echarts }),
    { provide: GOOGLE_MAPS_API_KEY, useValue: MAPS_API_KEY },
  ],
};
