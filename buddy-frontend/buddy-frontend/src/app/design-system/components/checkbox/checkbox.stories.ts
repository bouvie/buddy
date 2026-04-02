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
        <app-checkbox id="cb1" label="Unchecked" [checked]="false" />
        <app-checkbox id="cb2" label="Checked" [checked]="true" />
        <app-checkbox id="cb3" label="Indeterminate" [indeterminate]="true" />
        <app-checkbox id="cb4" label="Disabled unchecked" [checked]="false" [disabled]="true" />
        <app-checkbox id="cb5" label="Disabled checked" [checked]="true" [disabled]="true" />
      </div>
    `,
  }),
};
