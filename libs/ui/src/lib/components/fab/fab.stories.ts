import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { FabComponent } from './fab.component';
import { FAB_VARIANTS, FAB_SIZES } from './fab.types';

const meta: Meta<FabComponent> = {
  title: 'Design System / Components / FAB',
  component: FabComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=4-128',
  },
  argTypes: {
    variant:  { control: 'select', options: FAB_VARIANTS },
    size:     { control: 'select', options: FAB_SIZES },
    icon:     { control: 'text' },
    label:    { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: { variant: 'primary', size: 'md', icon: 'fa-solid fa-plus', label: '', disabled: false },
};

export default meta;
type Story = StoryObj<FabComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k10-fab ${argsToTemplate(args)}></k10-fab>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [FabComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;padding:32px;background:#0C1219">

        <div style="display:flex;gap:16px;align-items:center">
          <k10-fab variant="primary"   size="sm" icon="fa-solid fa-plus"></k10-fab>
          <k10-fab variant="primary"   size="md" icon="fa-solid fa-plus"></k10-fab>
          <k10-fab variant="primary"   size="lg" icon="fa-solid fa-plus"></k10-fab>
        </div>

        <div style="display:flex;gap:16px;align-items:center">
          <k10-fab variant="accent"    size="md" icon="fa-solid fa-location-dot"></k10-fab>
          <k10-fab variant="secondary" size="md" icon="fa-solid fa-pen"></k10-fab>
          <k10-fab variant="ghost"     size="md" icon="fa-solid fa-share"></k10-fab>
          <k10-fab variant="accent"    size="lg" icon="fa-solid fa-location-dot"></k10-fab>
          <k10-fab variant="primary"   size="md" icon="fa-solid fa-plus" [disabled]="true"></k10-fab>
        </div>

        <div style="display:flex;gap:12px;align-items:center">
          <k10-fab variant="primary"   size="md" icon="fa-solid fa-plus"         label="Add session"></k10-fab>
          <k10-fab variant="accent"    size="md" icon="fa-solid fa-location-dot" label="Track GPS"></k10-fab>
        </div>

      </div>
    `,
  }),
};
