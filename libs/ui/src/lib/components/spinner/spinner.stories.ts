import { Meta, StoryObj } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';

const meta: Meta<SpinnerComponent> = {
  title: 'Design System / Components / Spinner',
  component: SpinnerComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=30-13' },
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
      <div style="display:flex;flex-direction:column;gap:20px;padding:24px;background:#0C1219">
        <k10-spinner size="sm" variant="primary" label="Small — 20px" />
        <k10-spinner size="md" variant="primary" label="Medium — 32px" />
        <k10-spinner size="lg" variant="primary" label="Large — 48px" />
        <k10-spinner size="md" variant="secondary" label="Secondary" />
        <k10-spinner size="md" variant="white" label="White" />
      </div>
    `,
  }),
};
