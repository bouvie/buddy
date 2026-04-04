import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { LiveIndicatorComponent } from './live-indicator.component';
import { LIVE_INDICATOR_VARIANTS, LIVE_INDICATOR_SIZES, LIVE_INDICATOR_MODES } from './live-indicator.types';

const meta: Meta<LiveIndicatorComponent> = {
  title: 'Design System / Components / LiveIndicator',
  component: LiveIndicatorComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=12-99',
  },
  argTypes: {
    variant: { control: 'select', options: LIVE_INDICATOR_VARIANTS },
    size:    { control: 'select', options: LIVE_INDICATOR_SIZES },
    mode:    { control: 'select', options: LIVE_INDICATOR_MODES },
    label:   { control: 'text' },
    pulse:   { control: 'boolean' },
  },
  args: { variant: 'accent', size: 'md', mode: 'pill', label: 'LIVE', pulse: true },
};

export default meta;
type Story = StoryObj<LiveIndicatorComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k10-live-indicator ${argsToTemplate(args)}></k10-live-indicator>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [LiveIndicatorComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:32px;background:#0C1219">

        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px">Pill — sm/md/lg</p>
          <div style="display:flex;gap:12px;align-items:center">
            <k10-live-indicator variant="accent"  size="sm" mode="pill" label="LIVE"></k10-live-indicator>
            <k10-live-indicator variant="accent"  size="md" mode="pill" label="LIVE"></k10-live-indicator>
            <k10-live-indicator variant="accent"  size="lg" mode="pill" label="LIVE"></k10-live-indicator>
          </div>
        </div>

        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px">Pill — variants</p>
          <div style="display:flex;gap:12px;align-items:center">
            <k10-live-indicator variant="accent"  mode="pill" label="GPS"></k10-live-indicator>
            <k10-live-indicator variant="danger"  mode="pill" label="ALERT"></k10-live-indicator>
            <k10-live-indicator variant="success" mode="pill" label="SYNCED"></k10-live-indicator>
            <k10-live-indicator variant="warning" mode="pill" label="LATENCY"></k10-live-indicator>
          </div>
        </div>

        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px">Inline — transparent bg</p>
          <div style="display:flex;gap:16px;align-items:center">
            <k10-live-indicator variant="accent"  mode="inline" label="GPS Active"></k10-live-indicator>
            <k10-live-indicator variant="danger"  mode="inline" label="Recording"></k10-live-indicator>
            <k10-live-indicator variant="success" mode="inline" label="Synced"></k10-live-indicator>
            <k10-live-indicator variant="accent"  mode="inline" label="LIVE" [pulse]="false"></k10-live-indicator>
          </div>
        </div>

      </div>
    `,
  }),
};
