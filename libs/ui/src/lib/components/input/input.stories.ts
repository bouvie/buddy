import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { InputComponent } from './input.component';
import { INPUT_TYPES } from './input.types';

const meta: Meta<InputComponent> = {
  title: 'Design System / Components / Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=9-2',
  },
  argTypes: {
    type: { control: 'select', options: INPUT_TYPES },
    placeholder: { control: 'text' },
    id: { control: 'text' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    hasError: { control: 'boolean' },
    hasSuccess: { control: 'boolean' },
    value: { control: 'text' },
  },
  args: {
    type: 'text',
    placeholder: 'Placeholder',
    id: 'input-1',
    readOnly: false,
    hasError: false,
    hasSuccess: false,
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<div style="max-width:360px"><k10-input ${argsToTemplate(args)}></k10-input></div>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [InputComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;max-width:360px;padding:24px;background:#0C1219">
        <k10-input label="Normal" placeholder="Biometric Label"></k10-input>
        <k10-input label="Focus / Typing" placeholder="Active Metabolism" value="Active Metabolism"></k10-input>
        <k10-input label="Filled" value="User_10293_Archive"></k10-input>
        <k10-input label="Error" placeholder="Negative Mass Offset" [hasError]="true" errorMessage="Invalid value entered"></k10-input>
        <k10-input label="Success" value="Metric Synchronized" [hasSuccess]="true"></k10-input>
        <k10-input label="Disabled" placeholder="Read Only Stream" [disabled]="true"></k10-input>
      </div>
    `,
  }),
};
