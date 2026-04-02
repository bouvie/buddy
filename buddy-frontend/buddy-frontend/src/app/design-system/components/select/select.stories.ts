import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { SelectComponent } from './select.component';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option désactivée', value: '4', disabled: true },
];

const meta: Meta<SelectComponent> = {
  title: 'Design System / Components / Select',
  component: SelectComponent,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    placeholder: {
      control: 'text',
      description: "Texte affiché quand aucune valeur n'est sélectionnée",
    },
    label: { control: 'text', description: 'Label affiché au-dessus du select' },
    id: { control: 'text', description: 'id liant le label au select via [for]' },
    disabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
  },
  args: {
    placeholder: 'Select an option',
    label: '',
    id: '',
    hasError: false,
  },
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const Default: Story = {
  render: (args) => ({
    props: { ...args, options },
    template: `<app-select [options]="options" ${argsToTemplate(args)} />`,
  }),
};

export const WithLabel: Story = {
  args: { label: 'Choisir une option', id: 'select-1' },
  render: (args) => ({
    props: { ...args, options },
    template: `<app-select [options]="options" ${argsToTemplate(args)} />`,
  }),
};

export const AllStates: Story = {
  render: () => ({
    imports: [SelectComponent],
    template: `
      <div class="space-y-4 max-w-xs">
        <app-select label="Normal" id="s1" [options]="[]" placeholder="Select..." />
        <app-select label="Avec erreur" id="s2" [options]="[]" [hasError]="true" placeholder="Invalid..." />
        <app-select label="Désactivé" id="s3" [options]="[]" [disabled]="true" placeholder="Disabled..." />
      </div>
    `,
  }),
};
