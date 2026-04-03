import { Component, ChangeDetectionStrategy, input, computed, model } from '@angular/core';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import { NgxEchartsDirective } from 'ngx-echarts';

import type { ChartCardVariant, ChartCardData, ChartDataPoint } from './chart-card.types';
import { CHART_CARD_VARIANTS } from './chart-card.types';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { k9CssVar } from '../../utils';

@Component({
  selector: 'k9-chart-card',
  standalone: true,
  imports: [NgxEchartsDirective, SkeletonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.css'],
})
export class ChartCardComponent {
  readonly data = model<ChartCardData | null>(null);

  readonly safeVariant = computed<ChartCardVariant>(() => {
    const v = this.data()?.variant ?? 'skeleton';
    if (!CHART_CARD_VARIANTS.includes(v)) {
      console.warn(`[ChartCardComponent] Invalid variant: ${v}. Using 'skeleton'.`);
      return 'skeleton';
    }
    return v;
  });

  readonly title = computed(() => this.data()?.title ?? '');
  readonly headerValue = computed(() => this.data()?.headerValue ?? '');
  readonly unit = computed(() => this.data()?.unit ?? '');
  readonly isLive = computed(() => this.data()?.isLive ?? false);
  readonly emptyMessage = computed(() => this.data()?.emptyMessage ?? 'Awaiting Data Feed');
  readonly emptyIcon = computed(() => this.data()?.emptyIcon ?? 'fa-solid fa-chart-line');

  readonly isChart = computed(
    () => this.safeVariant() === 'line-area' || this.safeVariant() === 'bar',
  );

  readonly chartOptions = computed<EChartsOption>(() => {
    const variant = this.safeVariant();
    const points = this.data()?.points ?? [];

    if (variant === 'line-area') return this._buildLineAreaOptions(points);
    if (variant === 'bar') return this._buildBarOptions(points);
    return {};
  });

  private _buildLineAreaOptions(points: ChartDataPoint[]): EChartsOption {
    const primary = k9CssVar('--k9-color-primary');
    const border = k9CssVar('--k9-color-border');
    return {
      grid: { top: 8, right: 0, bottom: 0, left: 0, containLabel: false },
      xAxis: {
        type: 'category',
        data: points.map((p) => p.label),
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { lineStyle: { color: border, type: 'dashed' as const } },
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const p = Array.isArray(params) ? params[0] : params;
          return `${p.axisValue}<br/><b>${p.value}</b>`;
        },
      },
      series: [
        {
          type: 'line',
          data: points.map((p) => p.value),
          smooth: true,
          symbol: 'circle',
          symbolSize: 6,
          showSymbol: false,
          lineStyle: {
            color: primary,
            width: 2,
            shadowBlur: 8,
            shadowColor: `${primary}80`,
          },
          emphasis: {
            itemStyle: {
              color: primary,
              borderColor: primary,
              shadowBlur: 12,
              shadowColor: `${primary}99`,
            },
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: `${primary}40` },
              { offset: 1, color: `${primary}00` },
            ]),
            shadowBlur: 16,
            shadowColor: `${primary}20`,
          },
        },
      ],
    };
  }

  private _buildBarOptions(points: ChartDataPoint[]): EChartsOption {
    const primary = k9CssVar('--k9-color-primary');
    return {
      grid: { top: 0, right: 0, bottom: 0, left: 0, containLabel: false },
      xAxis: {
        type: 'category',
        data: points.map((p) => p.label),
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          const p = Array.isArray(params) ? params[0] : params;
          return `${p.axisValue}<br/><b>${p.value}</b>`;
        },
      },
      series: [
        {
          type: 'bar',
          data: points.map((p) => p.value),
          barMaxWidth: 40,
          itemStyle: {
            color: primary,
            borderRadius: [4, 4, 0, 0],
            shadowBlur: 8,
            shadowColor: `${primary}60`,
            shadowOffsetY: -2,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 18,
              shadowColor: `${primary}99`,
              shadowOffsetY: -3,
            },
          },
        },
      ],
    };
  }
}
