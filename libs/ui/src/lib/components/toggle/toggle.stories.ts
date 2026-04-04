import { Meta, StoryObj } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';
import { TOGGLE_VARIANTS } from './toggle.types';

const meta: Meta<ToggleComponent> = {
  title: 'Design System / Components / Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded', figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=9-29' },
  argTypes: {
    label:   { control: 'text' },
    variant: { control: 'select', options: TOGGLE_VARIANTS },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Toggle label', variant: 'primary', checked: false },
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => ({
    imports: [ToggleComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;padding:24px;background:#0C1219;max-width:320px">
        <k10-toggle label="Notifications"       variant="primary" [checked]="false"></k10-toggle>
        <k10-toggle label="GPS Tracking"        variant="primary" [checked]="true"></k10-toggle>
        <k10-toggle label="Live Data Feed"      variant="accent"  [checked]="true"></k10-toggle>
        <k10-toggle label="Activity Monitoring" variant="accent"  [checked]="false"></k10-toggle>
        <k10-toggle label="Disabled off"        [checked]="false" [disabled]="true"></k10-toggle>
        <k10-toggle label="Disabled on"         [checked]="true"  [disabled]="true"></k10-toggle>
      </div>
    `,
  }),
};
