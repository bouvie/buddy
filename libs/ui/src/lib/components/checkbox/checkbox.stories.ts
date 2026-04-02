import { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Design System / Components / Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    id: { control: 'text', description: 'Unique identifier for accessibility' },
    label: { control: 'text', description: 'Checkbox label text' },
    checked: { control: 'boolean', description: 'Checked state' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    indeterminate: { control: 'boolean', description: 'Mixed/indeterminate state' },
  },
  args: {
    id: 'checkbox-1',
    label: 'Accept terms',
    checked: false,
    indeterminate: false,
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {};

export const AllStates: Story = {
  render: () => ({
    imports: [CheckboxComponent],
    template: `
      <div class="space-y-2">
        <k9-checkbox id="cb1" label="Unchecked" [checked]="false" />
        <k9-checkbox id="cb2" label="Checked" [checked]="true" />
        <k9-checkbox id="cb3" label="Indeterminate" [indeterminate]="true" />
        <k9-checkbox id="cb4" label="Disabled unchecked" [checked]="false" [disabled]="true" />
        <k9-checkbox id="cb5" label="Disabled checked" [checked]="true" [disabled]="true" />
      </div>
    `,
  }),
};
