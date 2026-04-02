import { Meta, StoryObj } from '@storybook/angular';
import { ListItemComponent } from './list-item.component';
import type { ListItemData } from './list-item.types';

// ─── Fixtures ────────────────────────────────────────────────────────────────
const TOGGLE: ListItemData = {
  variant:  'toggle',
  icon:     'fa-solid fa-bell',
  label:    'System Alerts',
  sublabel: 'Threshold monitoring',
  checked:  false,
};

const NAVIGATION: ListItemData = {
  variant:  'navigation',
  icon:     'fa-solid fa-link',
  label:    'Biometric Sync',
  sublabel: 'Active connection stable',
};

const TEXT_VALUE: ListItemData = {
  variant:  'text-value',
  icon:     'fa-solid fa-microchip',
  label:    'Core Firmware',
  sublabel: 'v2.4.0-stable',
  value:    'Up to date',
};

const SKELETON: ListItemData = {
  variant: 'skeleton',
  label:   '',
};

const STATUS_ERROR: ListItemData = {
  variant:  'status-error',
  icon:     'fa-solid fa-triangle-exclamation',
  label:    'Latency Spike',
  sublabel: 'Check sensor alignment',
};

// ─── Meta ─────────────────────────────────────────────────────────────────────
const meta: Meta<ListItemComponent> = {
  title: 'Design System / Organic / ListItem',
  component: ListItemComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/Mu9JwRHYdwbyYVNRe63par/Buddy?node-id=56-1494&m=dev',
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'ListItemData — alimenté par une directive dans l\'app',
    },
  },
  args: { data: TEXT_VALUE },
};

export default meta;
type Story = StoryObj<ListItemComponent>;

// ─── Stories ──────────────────────────────────────────────────────────────────
export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<app-list-item class="block max-w-xs" [data]="data"></app-list-item>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [ListItemComponent],
    props: { toggle: TOGGLE, navigation: NAVIGATION, textValue: TEXT_VALUE, skeleton: SKELETON, statusError: STATUS_ERROR },
    template: `
      <div style="display:flex;flex-direction:column;gap:8px;max-width:360px;padding:24px;background:var(--k9-color-bg)">
        <app-list-item [data]="toggle"></app-list-item>
        <app-list-item [data]="navigation"></app-list-item>
        <app-list-item [data]="textValue"></app-list-item>
        <app-list-item [data]="skeleton"></app-list-item>
        <app-list-item [data]="statusError"></app-list-item>
      </div>
    `,
  }),
};
