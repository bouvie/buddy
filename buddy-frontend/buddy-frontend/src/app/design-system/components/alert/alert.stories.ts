import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { AlertComponent } from './alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Design System / Components / Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/Mu9JwRHYdwbyYVNRe63par/Buddy?node-id=51-817&m=dev',
  },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    title: { control: 'text' },
    description: { control: 'text' },
    dismissible: { control: 'boolean' },
    visible: { control: 'boolean' },
  },
  args: {
    variant: 'info',
    title: 'Information / System Notice',
    description: 'Neural synchronization is currently operating at peak efficiency. No immediate operator action is required at this cycle.',
    dismissible: true,
    visible: true,
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<div style="max-width:480px"><app-alert ${argsToTemplate(args)}></app-alert></div>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [AlertComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;max-width:480px;padding:24px;background:#0F1419">
        <app-alert
          variant="info"
          title="Information / System Notice"
          description="Neural synchronization is currently operating at peak efficiency. No immediate operator action is required at this cycle."
          [dismissible]="true"
        />
        <app-alert
          variant="success"
          title="Success / Metric Synchronized"
          description="Physical data point convergence complete. Biometric integrity verified across all distributed nodes."
          [dismissible]="true"
        />
        <app-alert
          variant="warning"
          title="Warning / Resource Latency"
          description="External telemetry feed is experiencing high jitter. Recommended recalibration if latency exceeds 250ms threshold."
          [dismissible]="true"
        />
        <app-alert
          variant="error"
          title="Critical / Uplink Severed"
          description="Primary biometric feed disconnected. Automatic failover initiated but local storage at 98% capacity."
          [dismissible]="true"
        />
      </div>
    `,
  }),
};
