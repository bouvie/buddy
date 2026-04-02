import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import { LineChart, BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { NgxEchartsDirective } from 'ngx-echarts';

import type { ChartCardVariant, ChartCardData, ChartDataPoint } from './chart-card.types';
import { CHART_CARD_VARIANTS } from './chart-card.types';
import { SkeletonComponent } from '../../skeleton/skeleton.component';
import { K9_ECHARTS_THEME } from '../../../tokens/echarts-theme';

echarts.use([LineChart, BarChart, GridComponent, TooltipComponent, CanvasRenderer]);
echarts.registerTheme('k9', K9_ECHARTS_THEME);

// Tokens sync depuis variables.css
const PRIMARY = '#BACBB8';
const BORDER  = '#434842';

@Component({
  selector: 'app-chart-card',
  standalone: true,
  imports: [NgxEchartsDirective, SkeletonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css'],
})
export class ChartCardComponent {
  readonly data = input<ChartCardData | null>(null);

  readonly safeVariant = computed<ChartCardVariant>(() => {
    const v = this.data()?.variant ?? 'skeleton';
    if (!CHART_CARD_VARIANTS.includes(v)) {
      console.warn(`[ChartCardComponent] Invalid variant: ${v}. Using 'skeleton'.`);
      return 'skeleton';
    }
    return v;
  });

  readonly title        = computed(() => this.data()?.title        ?? '');
  readonly headerValue  = computed(() => this.data()?.headerValue  ?? '');
  readonly unit         = computed(() => this.data()?.unit         ?? '');
  readonly isLive       = computed(() => this.data()?.isLive       ?? false);
  readonly emptyMessage = computed(() => this.data()?.emptyMessage ?? 'Awaiting Data Feed');
  readonly emptyIcon    = computed(() => this.data()?.emptyIcon    ?? 'fa-solid fa-chart-line');

  readonly isChart = computed(() =>
    this.safeVariant() === 'line-area' || this.safeVariant() === 'bar'
  );

  readonly chartOptions = computed<EChartsOption>(() => {
    const variant = this.safeVariant();
    const points  = this.data()?.points ?? [];

    if (variant === 'line-area') return this._buildLineAreaOptions(points);
    if (variant === 'bar')       return this._buildBarOptions(points);
    return {};
  });

  private _buildLineAreaOptions(points: ChartDataPoint[]): EChartsOption {
    return {
      grid: { top: 8, right: 0, bottom: 0, left: 0, containLabel: false },
      xAxis: {
        type: 'category',
        data: points.map(p => p.label),
        axisLine: { show: false }, axisTick: { show: false }, axisLabel: { show: false },
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false }, axisTick: { show: false }, axisLabel: { show: false },
        splitLine: { lineStyle: { color: BORDER, type: 'dashed' as const } },
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const p = Array.isArray(params) ? params[0] : params;
          return `${p.axisValue}<br/><b>${p.value}</b>`;
        },
      },
      series: [{
        type: 'line',
        data: points.map(p => p.value),
        smooth: true,
        symbol: 'none',
        lineStyle: { color: PRIMARY, width: 2 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: `${PRIMARY}40` },
            { offset: 1, color: `${PRIMARY}00` },
          ]),
        },
      }],
    };
  }

  private _buildBarOptions(points: ChartDataPoint[]): EChartsOption {
    return {
      grid: { top: 0, right: 0, bottom: 0, left: 0, containLabel: false },
      xAxis: {
        type: 'category',
        data: points.map(p => p.label),
        axisLine: { show: false }, axisTick: { show: false }, axisLabel: { show: false },
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false }, axisTick: { show: false }, axisLabel: { show: false },
        splitLine: { show: false },
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const p = Array.isArray(params) ? params[0] : params;
          return `${p.axisValue}<br/><b>${p.value}</b>`;
        },
      },
      series: [{
        type: 'bar',
        data: points.map(p => p.value),
        barMaxWidth: 40,
        itemStyle: { color: PRIMARY, borderRadius: [4, 4, 0, 0] },
      }],
    };
  }
}
