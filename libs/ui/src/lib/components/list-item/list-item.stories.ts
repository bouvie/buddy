import { Meta, StoryObj } from '@storybook/angular';
import { ListItemComponent } from './list-item.component';
import type { ListItemData } from './list-item.types';

// ─── Fixtures ────────────────────────────────────────────────────────────────
const TOGGLE: ListItemData = {
  variant: 'toggle',
  icon: 'fa-solid fa-bell',
  label: 'System Alerts',
  sublabel: 'Threshold monitoring',
  checked: false,
};

const NAVIGATION: ListItemData = {
  variant: 'navigation',
  icon: 'fa-solid fa-link',
  label: 'Biometric Sync',
  sublabel: 'Active connection stable',
};

const TEXT_VALUE: ListItemData = {
  variant: 'text-value',
  icon: 'fa-solid fa-microchip',
  label: 'Core Firmware',
  sublabel: 'v2.4.0-stable',
  value: 'Up to date',
};

const SKELETON: ListItemData = {
  variant: 'skeleton',
  label: '',
};

const STATUS_ERROR: ListItemData = {
  variant: 'status-error',
  icon: 'fa-solid fa-triangle-exclamation',
  label: 'Latency Spike',
  sublabel: 'Check sensor alignment',
};

// ─── Meta ─────────────────────────────────────────────────────────────────────
const meta: Meta<ListItemComponent> = {
  title: 'Design System / Components / ListItem',
  component: ListItemComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=11-142',
  },
  argTypes: {
    data: {
      control: 'object',
      description: "ListItemData — alimenté par une directive dans l'app",
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
    template: `<k10-list-item class="block max-w-xs" [data]="data"></k10-list-item>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [ListItemComponent],
    props: {
      toggle: TOGGLE,
      navigation: NAVIGATION,
      textValue: TEXT_VALUE,
      skeleton: SKELETON,
      statusError: STATUS_ERROR,
    },
    template: `
      <div style="display:flex;flex-direction:column;gap:8px;max-width:360px;padding:24px;background:var(--k10-color-bg)">
        <k10-list-item [data]="toggle"></k10-list-item>
        <k10-list-item [data]="navigation"></k10-list-item>
        <k10-list-item [data]="textValue"></k10-list-item>
        <k10-list-item [data]="skeleton"></k10-list-item>
        <k10-list-item [data]="statusError"></k10-list-item>
      </div>
    `,
  }),
};
