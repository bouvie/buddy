import { Meta, StoryObj } from '@storybook/angular';
import { ToggleComponent } from './toggle.component';

const meta: Meta<ToggleComponent> = {
  title: 'Design System / Components / Toggle',
  component: ToggleComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded', figmaUrl: 'https://www.figma.com/design/7t9yhZTrDeEa3S5XwgRiXP?node-id=30-44' },
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Toggle label', checked: false },
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Default: Story = {};
