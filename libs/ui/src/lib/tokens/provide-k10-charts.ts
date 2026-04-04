import { Provider } from '@angular/core';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart, BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';

import { K10_ECHARTS_THEME } from './echarts-theme';

export function provideK10Charts(): Provider {
  echarts.use([LineChart, BarChart, GridComponent, TooltipComponent, SVGRenderer]);
  echarts.registerTheme('k10', K10_ECHARTS_THEME);
  return provideEchartsCore({ echarts });
}

/** @deprecated Use provideK10Charts */
export const provideK9Charts = provideK10Charts;
