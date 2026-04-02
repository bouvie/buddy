import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart, BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

import { ChartCardComponent } from './chart-card.component';
import type { ChartCardData, ChartDataPoint } from './chart-card.types';

echarts.use([LineChart, BarChart, GridComponent, TooltipComponent, CanvasRenderer]);

// ─── Fixtures ────────────────────────────────────────────────────────────────

/** Énergie cinétique sur 10 relevés horaires — directive appKineticEnergyChart */
const KINETIC_ENERGY_POINTS: ChartDataPoint[] = [
  { label: '08:00', value: 820  },
  { label: '09:00', value: 932  },
  { label: '10:00', value: 901  },
  { label: '11:00', value: 934  },
  { label: '12:00', value: 1290 },
  { label: '13:00', value: 1330 },
  { label: '14:00', value: 1320 },
  { label: '15:00', value: 1100 },
  { label: '16:00', value: 890  },
  { label: '17:00', value: 1240 },
];

/** Intensité par intervalle d'entraînement — directive appIntervalIntensityChart */
const INTERVAL_INTENSITY_POINTS: ChartDataPoint[] = [
  { label: 'I1', value: 38  },
  { label: 'I2', value: 64  },
  { label: 'I3', value: 102 },
  { label: 'I4', value: 51  },
  { label: 'I5', value: 122 },
  { label: 'I6', value: 90  },
];

const LINE_AREA: ChartCardData = {
  variant:     'line-area',
  title:       'Kinetic Energy Trend',
  headerValue: '1,240',
  unit:        'kcal',
  isLive:      true,
  points:      KINETIC_ENERGY_POINTS,
};

const BAR: ChartCardData = {
  variant: 'bar',
  title:   'Interval Intensity',
  points:  INTERVAL_INTENSITY_POINTS,
};

const SKELETON: ChartCardData = { variant: 'skeleton' };

const EMPTY: ChartCardData = {
  variant:      'empty',
  emptyMessage: 'Awaiting Data Feed',
  emptyIcon:    'fa-solid fa-chart-line',
};

// ─── Meta ─────────────────────────────────────────────────────────────────────
const meta: Meta<ChartCardComponent> = {
  title: 'Design System / Organic / ChartCard',
  component: ChartCardComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideEchartsCore({ echarts })],
    }),
  ],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/Mu9JwRHYdwbyYVNRe63par/Buddy?node-id=56-1456&m=dev',
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'ChartCardData — points: ChartDataPoint[] fourni par une directive app',
    },
  },
  args: { data: LINE_AREA },
};

export default meta;
type Story = StoryObj<ChartCardComponent>;

// ─── Stories ──────────────────────────────────────────────────────────────────
export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<app-chart-card class="block max-w-xs" [data]="data"></app-chart-card>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [ChartCardComponent],
    props: { lineArea: LINE_AREA, bar: BAR, skeleton: SKELETON, empty: EMPTY },
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;max-width:360px;padding:24px;background:var(--k9-color-bg)">
        <app-chart-card [data]="lineArea"></app-chart-card>
        <app-chart-card [data]="bar"></app-chart-card>
        <app-chart-card [data]="skeleton"></app-chart-card>
        <app-chart-card [data]="empty"></app-chart-card>
      </div>
    `,
  }),
};
