import {  Provider } from '@angular/core';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart, BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

import { K9_ECHARTS_THEME } from './echarts-theme';

export function provideK9Charts(): Provider {
  echarts.use([LineChart, BarChart, GridComponent, TooltipComponent, CanvasRenderer]);
  echarts.registerTheme('k9', K9_ECHARTS_THEME);
  return provideEchartsCore({ echarts });
}
