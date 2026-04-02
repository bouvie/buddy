import { Meta, StoryObj } from '@storybook/angular';
import { FormFieldComponent } from './form-field.component';
import { InputComponent } from '../input/input.component';

const meta: Meta<FormFieldComponent> = {
  title: 'Design System / Components / FormField',
  component: FormFieldComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
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
        <app-form-field
          [label]="label"
          [inputId]="inputId"
          [required]="required"
          [hasError]="hasError"
          [error]="error"
          [helpText]="helpText"
        >
          <app-input [id]="inputId" type="email" placeholder="email@example.com" [hasError]="hasError" />
        </app-form-field>
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    imports: [FormFieldComponent, InputComponent],
    template: `
      <div class="space-y-6 max-w-xs">
        <app-form-field label="Normal field" helpText="This is a help text">
          <app-input placeholder="Email..." />
        </app-form-field>
        <app-form-field label="Required field" [required]="true">
          <app-input placeholder="Required value" />
        </app-form-field>
        <app-form-field label="Field with error" [hasError]="true" error="This field is invalid">
          <app-input [hasError]="true" placeholder="Invalid value" />
        </app-form-field>
        <app-form-field label="Disabled field">
          <app-input [disabled]="true" placeholder="Disabled" />
        </app-form-field>
      </div>
    `,
  }),
};
