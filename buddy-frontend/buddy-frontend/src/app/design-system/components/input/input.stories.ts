import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { InputComponent } from './input.component';
import { INPUT_TYPES } from './input.types';

const meta: Meta<InputComponent> = {
  title: 'Design System / Components / Input',
  component: InputComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/Mu9JwRHYdwbyYVNRe63par/Buddy?node-id=51-817&m=dev',
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
    template: `<div style="max-width:360px"><app-input ${argsToTemplate(args)}></app-input></div>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [InputComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:16px;max-width:360px;padding:24px;background:#0F1419">
        <app-input label="Normal" placeholder="Biometric Label"></app-input>
        <app-input label="Focus / Typing" placeholder="Active Metabolism" value="Active Metabolism"></app-input>
        <app-input label="Filled" value="User_10293_Archive"></app-input>
        <app-input label="Error" placeholder="Negative Mass Offset" [hasError]="true" errorMessage="Invalid value entered"></app-input>
        <app-input label="Success" value="Metric Synchronized" [hasSuccess]="true"></app-input>
        <app-input label="Disabled" placeholder="Read Only Stream" [disabled]="true"></app-input>
      </div>
    `,
  }),
};
