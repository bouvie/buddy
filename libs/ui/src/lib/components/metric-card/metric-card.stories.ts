import { Meta, StoryObj } from '@storybook/angular';
import { MetricCardComponent } from './metric-card.component';
import type { MetricCardData } from './metric-card.types';
import { METRIC_CARD_VARIANTS } from './metric-card.types';

// ─── Fixtures ────────────────────────────────────────────────────────────────
const ACTIVE_VELOCITY: MetricCardData = {
  variant: 'active',
  label: 'Velocity',
  value: '14.8',
  unit: 'KM/H',
  trend: 12,
  progress: 75,
};

const ACTIVE_HEART_RATE: MetricCardData = {
  variant: 'active',
  label: 'Heart Rate',
  value: '142',
  unit: 'BPM',
  trend: -3,
  progress: 60,
};

const LOADING: MetricCardData = {
  variant: 'loading',
  label: '',
  value: '',
  unit: '',
  trend: 0,
  progress: 0,
};

const EMPTY: MetricCardData = {
  variant: 'empty',
  label: '',
  value: '',
  unit: '',
  trend: 0,
  progress: 0,
  emptyMessage: 'No Heart Rate Signal',
  emptyIcon: 'fa-solid fa-heart-pulse',
};

// ─── Meta ─────────────────────────────────────────────────────────────────────
const meta: Meta<MetricCardComponent> = {
  title: 'Design System / Components / MetricCard',
  component: MetricCardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/7t9yhZTrDeEa3S5XwgRiXP?node-id=14-25',
  },
  argTypes: {
    data: {
      control: 'object',
      description: "MetricCardData — alimenté par une directive dans l'app",
    },
  },
  args: { data: ACTIVE_VELOCITY },
};

export default meta;
type Story = StoryObj<MetricCardComponent>;

// ─── Stories ──────────────────────────────────────────────────────────────────
export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k9-metric-card class="block max-w-xs" [data]="data"></k9-metric-card>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [MetricCardComponent],
    props: {
      activeVelocity: ACTIVE_VELOCITY,
      activeHeartRate: ACTIVE_HEART_RATE,
      loading: LOADING,
      empty: EMPTY,
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;max-width:340px;padding:24px;background:var(--k9-color-bg)">
        <k9-metric-card [data]="activeVelocity"></k9-metric-card>
        <k9-metric-card [data]="activeHeartRate"></k9-metric-card>
        <k9-metric-card [data]="loading"></k9-metric-card>
        <k9-metric-card [data]="empty"></k9-metric-card>
      </div>
    `,
  }),
};
