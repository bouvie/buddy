import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { TagComponent } from './tag.component';
import { TAG_VARIANTS, TAG_SIZES } from './tag.types';

const meta: Meta<TagComponent> = {
  title: 'Design System / Components / Tag',
  component: TagComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=4-78',
  },
  argTypes: {
    variant:   { control: 'select', options: TAG_VARIANTS },
    size:      { control: 'select', options: TAG_SIZES },
    removable: { control: 'boolean' },
    label:     { control: 'text' },
  },
  args: { variant: 'primary', size: 'md', removable: false, label: 'Biometric' },
};

export default meta;
type Story = StoryObj<TagComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k10-tag ${argsToTemplate(args)}></k10-tag>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [TagComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:20px;padding:32px;background:#0C1219">

        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <k10-tag variant="default">Default</k10-tag>
          <k10-tag variant="primary">Primary</k10-tag>
          <k10-tag variant="accent">Accent</k10-tag>
          <k10-tag variant="success">Success</k10-tag>
          <k10-tag variant="warning">Warning</k10-tag>
          <k10-tag variant="danger">Danger</k10-tag>
          <k10-tag variant="info">Info</k10-tag>
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <k10-tag variant="primary" size="sm">Primary sm</k10-tag>
          <k10-tag variant="accent"  size="sm">Accent sm</k10-tag>
          <k10-tag variant="success" size="sm">Success sm</k10-tag>
          <k10-tag variant="warning" size="sm">Warning sm</k10-tag>
          <k10-tag variant="danger"  size="sm">Danger sm</k10-tag>
        </div>

        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <k10-tag variant="primary" [removable]="true">GPS Active</k10-tag>
          <k10-tag variant="accent"  [removable]="true">Heart Rate</k10-tag>
          <k10-tag variant="success" [removable]="true">Synced</k10-tag>
          <k10-tag variant="warning" [removable]="true">Low Battery</k10-tag>
        </div>

      </div>
    `,
  }),
};
