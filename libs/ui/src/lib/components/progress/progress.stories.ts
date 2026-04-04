import { Meta, StoryObj } from '@storybook/angular';
import { ProgressComponent } from './progress.component';
import { PROGRESS_VARIANTS } from './progress.types';

const meta: Meta<ProgressComponent> = {
  title: 'Design System / Components / Progress',
  component: ProgressComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded', figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=29-28' },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
    },
    size:    { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: PROGRESS_VARIANTS },
    showLabel: { control: 'boolean' },
  },
  args: { value: 65, size: 'md', variant: 'primary', showLabel: true },
};

export default meta;
type Story = StoryObj<ProgressComponent>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => ({
    imports: [ProgressComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:20px;padding:24px;background:#0C1219;max-width:360px">
        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 8px">Primary — sizes</p>
          <div style="display:flex;flex-direction:column;gap:10px">
            <k10-progress [value]="60" size="sm" variant="primary" [showLabel]="false"></k10-progress>
            <k10-progress [value]="60" size="md" variant="primary" [showLabel]="false"></k10-progress>
            <k10-progress [value]="60" size="lg" variant="primary" [showLabel]="false"></k10-progress>
          </div>
        </div>
        <div>
          <p style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 8px">Color variants</p>
          <div style="display:flex;flex-direction:column;gap:10px">
            <k10-progress [value]="75" size="md" variant="primary" [showLabel]="true"></k10-progress>
            <k10-progress [value]="60" size="md" variant="accent"  [showLabel]="true"></k10-progress>
            <k10-progress [value]="90" size="md" variant="success" [showLabel]="true"></k10-progress>
            <k10-progress [value]="40" size="md" variant="warning" [showLabel]="true"></k10-progress>
            <k10-progress [value]="25" size="md" variant="danger"  [showLabel]="true"></k10-progress>
          </div>
        </div>
      </div>
    `,
  }),
};
