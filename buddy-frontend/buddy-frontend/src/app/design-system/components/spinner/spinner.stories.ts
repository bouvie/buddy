import { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';

const meta: Meta<SpinnerComponent> = {
  title: 'Design System / Components / Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
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
        <app-spinner size="sm" variant="primary" label="Small" />
        <app-spinner size="md" variant="primary" label="Medium" />
        <app-spinner size="lg" variant="primary" label="Large" />
        <app-spinner size="md" variant="secondary" label="Secondary" />
        <app-spinner size="md" variant="white" label="White" />
      </div>
    `,
  }),
};
