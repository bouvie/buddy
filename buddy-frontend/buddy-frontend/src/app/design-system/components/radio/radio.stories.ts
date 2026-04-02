import { Meta, StoryObj } from '@storybook/angular';
import { RadioComponent } from './radio.component';

const meta: Meta<RadioComponent> = {
  title: 'Design System / Components / Radio',
  component: RadioComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    name: { control: 'text', description: 'Radio group name' },
    value: { control: 'text', description: 'Radio button value' },
    label: { control: 'text', description: 'Radio label text' },
    checked: { control: 'boolean', description: 'Checked state' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
  args: {
    name: 'options',
    value: 'option1',
    label: 'Option 1',
    checked: false,
  },
};

export default meta;
type Story = StoryObj<RadioComponent>;

export const Default: Story = {};

export const RadioGroup: Story = {
  render: () => ({
    imports: [RadioComponent],
    template: `
      <div class="space-y-3">
        <app-radio name="options" value="1" label="Option 1" [checked]="true" />
        <app-radio name="options" value="2" label="Option 2" />
        <app-radio name="options" value="3" label="Option 3" />
        <app-radio name="options" value="4" label="Option 4 (disabled)" [disabled]="true" />
      </div>
    `,
  }),
};
