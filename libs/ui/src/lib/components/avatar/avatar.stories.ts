import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';
import { AVATAR_SIZES } from './avatar.types';

const meta: Meta<AvatarComponent> = {
  title: 'Design System / Components / Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/Mu9JwRHYdwbyYVNRe63par/Buddy?node-id=51-817&m=dev',
  },
  argTypes: {
    size: { control: 'select', options: AVATAR_SIZES },
    src: { control: 'text' },
    alt: { control: 'text' },
    initials: { control: 'text' },
    name: { control: 'text' },
    subtitle: { control: 'text' },
  },
  args: { size: 'md', src: '', alt: '', initials: 'AK', name: 'Alex Kinetic', subtitle: 'Athlete' },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k9-avatar ${argsToTemplate(args)}></k9-avatar>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [AvatarComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:24px;background:#0F1419">
        <k9-avatar size="lg" initials="AK" name="Alex Kinetic" subtitle="Elite Athlete"></k9-avatar>
        <k9-avatar size="md" initials="MR" name="Morgan Reed"></k9-avatar>
        <k9-avatar size="sm" initials="JL"></k9-avatar>
      </div>
    `,
  }),
};
