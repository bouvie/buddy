import { Meta, StoryObj } from '@storybook/angular';
import { FormFieldComponent } from './form-field.component';
import { InputComponent } from '../input/input.component';

const meta: Meta<FormFieldComponent> = {
  title: 'Design System / Components / FormField',
  component: FormFieldComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded', figmaUrl: 'https://www.figma.com/design/7t9yhZTrDeEa3S5XwgRiXP?node-id=27-66' },
  argTypes: {
    label: { control: 'text', description: 'Label du champ' },
    inputId: { control: 'text', description: 'id liant le label au champ enfant via [for]' },
    required: { control: 'boolean', description: 'Ajoute un astérisque rouge après le label' },
    hasError: { control: 'boolean', description: 'Active l\'affichage du message d\'erreur' },
    error: { control: 'text', description: 'Message d\'erreur (affiché quand hasError=true)' },
    helpText: { control: 'text', description: 'Texte d\'aide (masqué quand hasError=true)' },
  },
  args: {
    label: 'Email Address',
    inputId: 'field-email',
    required: false,
    hasError: false,
    error: '',
    helpText: 'We use your email to send updates',
  },
};

export default meta;
type Story = StoryObj<FormFieldComponent>;

export const Default: Story = {
  render: (args) => ({
    imports: [FormFieldComponent, InputComponent],
    props: args,
    template: `
      <div class="max-w-xs">
        <k9-form-field
          [label]="label"
          [inputId]="inputId"
          [required]="required"
          [hasError]="hasError"
          [error]="error"
          [helpText]="helpText"
        >
          <k9-input [id]="inputId" type="email" placeholder="email@example.com" [hasError]="hasError" />
        </k9-form-field>
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    imports: [FormFieldComponent, InputComponent],
    template: `
      <div class="space-y-6 max-w-xs">
        <k9-form-field label="Normal field" helpText="This is a help text">
          <k9-input placeholder="Email..." />
        </k9-form-field>
        <k9-form-field label="Required field" [required]="true">
          <k9-input placeholder="Required value" />
        </k9-form-field>
        <k9-form-field label="Field with error" [hasError]="true" error="This field is invalid">
          <k9-input [hasError]="true" placeholder="Invalid value" />
        </k9-form-field>
        <k9-form-field label="Disabled field">
          <k9-input [disabled]="true" placeholder="Disabled" />
        </k9-form-field>
      </div>
    `,
  }),
};
