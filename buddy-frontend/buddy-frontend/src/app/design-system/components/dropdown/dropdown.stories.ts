import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { DropdownComponent } from './dropdown.component';

const SAMPLE_ITEMS = [
  { label: 'Modifier le profil', value: 'edit' },
  { label: 'Partager', value: 'share' },
  { label: 'Archiver', value: 'archive', disabled: true },
  { label: 'Supprimer', value: 'delete', danger: true },
];

const meta: Meta<DropdownComponent> = {
  title: 'Design System / Components / Dropdown',
  component: DropdownComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    triggerLabel: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    items: SAMPLE_ITEMS,
    triggerLabel: 'Actions',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<app-dropdown ${argsToTemplate(args)}></app-dropdown>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [DropdownComponent],
    template: `
      <div style="display:flex;gap:24px;align-items:flex-start;padding:24px">
        <app-dropdown triggerLabel="Actions" [items]="items"></app-dropdown>
        <app-dropdown triggerLabel="Désactivé" [disabled]="true" [items]="items"></app-dropdown>
      </div>
    `,
    props: { items: SAMPLE_ITEMS },
  }),
};
