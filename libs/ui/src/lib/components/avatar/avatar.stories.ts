import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';
import { AVATAR_SIZES, AVATAR_COLORS } from './avatar.types';

const meta: Meta<AvatarComponent> = {
  title: 'Design System / Components / Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=4-147',
  },
  argTypes: {
    size:     { control: 'select', options: AVATAR_SIZES },
    color:    { control: 'select', options: AVATAR_COLORS },
    src:      { control: 'text' },
    alt:      { control: 'text' },
    initials: { control: 'text' },
    name:     { control: 'text' },
    subtitle: { control: 'text' },
  },
  args: { size: 'md', color: 'primary', src: '', alt: '', initials: 'AB', name: '', subtitle: '' },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k10-avatar ${argsToTemplate(args)}></k10-avatar>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [AvatarComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:24px;background:#0C1219">

        <div style="display:flex;gap:12px;align-items:flex-end">
          <k10-avatar size="sm" color="primary"   initials="AB"></k10-avatar>
          <k10-avatar size="md" color="primary"   initials="AB"></k10-avatar>
          <k10-avatar size="lg" color="primary"   initials="AB"></k10-avatar>
          <k10-avatar size="xl" color="primary"   initials="AB"></k10-avatar>
        </div>

        <div style="display:flex;gap:12px;align-items:center">
          <k10-avatar size="md" color="primary"   initials="AB"></k10-avatar>
          <k10-avatar size="md" color="accent"    initials="AB"></k10-avatar>
          <k10-avatar size="md" color="secondary" initials="AB"></k10-avatar>
          <k10-avatar size="md" color="success"   initials="AB"></k10-avatar>
        </div>

        <div style="display:flex;gap:12px;align-items:center">
          <k10-avatar size="md" color="primary" initials="AK" name="Alex Kinetic" subtitle="Elite Athlete"></k10-avatar>
          <k10-avatar size="md" color="accent"  initials="MR" name="Morgan Reed"></k10-avatar>
        </div>

      </div>
    `,
  }),
};
