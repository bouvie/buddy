import { Meta, StoryObj } from '@storybook/angular';
import { ProgressComponent } from './progress.component';

const meta: Meta<ProgressComponent> = {
  title: 'Design System / Components / Progress',
  component: ProgressComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 5 },
      description: 'Progress percentage (0-100)',
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Progress bar thickness' },
    showLabel: { control: 'boolean', description: 'Display percentage label' },
  },
  args: { value: 65, size: 'md', showLabel: true },
};

export default meta;
type Story = StoryObj<ProgressComponent>;

export const Default: Story = {};
