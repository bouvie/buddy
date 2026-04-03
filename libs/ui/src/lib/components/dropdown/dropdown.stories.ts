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
  parameters: { layout: 'centered', figmaUrl: 'https://www.figma.com/design/7t9yhZTrDeEa3S5XwgRiXP?node-id=27-48' },
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
    template: `<k9-dropdown ${argsToTemplate(args)}></k9-dropdown>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [DropdownComponent],
    template: `
      <div style="display:flex;gap:24px;align-items:flex-start;padding:24px">
        <k9-dropdown triggerLabel="Actions" [items]="items"></k9-dropdown>
        <k9-dropdown triggerLabel="Désactivé" [disabled]="true" [items]="items"></k9-dropdown>
      </div>
    `,
    props: { items: SAMPLE_ITEMS },
  }),
};
