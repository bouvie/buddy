import { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';

const meta: Meta<SpinnerComponent> = {
  title: 'Design System / Components / Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', figmaUrl: 'https://www.figma.com/design/7t9yhZTrDeEa3S5XwgRiXP?node-id=30-13' },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['primary', 'secondary', 'white'] },
    label: { control: 'text' },
  },
  args: { size: 'md', variant: 'primary', label: 'Loading...' },
};

export default meta;
type Story = StoryObj<SpinnerComponent>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => ({
    imports: [SpinnerComponent],
    template: `
      <div class="space-y-4">
        <k9-spinner size="sm" variant="primary" label="Small" />
        <k9-spinner size="md" variant="primary" label="Medium" />
        <k9-spinner size="lg" variant="primary" label="Large" />
        <k9-spinner size="md" variant="secondary" label="Secondary" />
        <k9-spinner size="md" variant="white" label="White" />
      </div>
    `,
  }),
};
