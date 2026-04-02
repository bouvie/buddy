import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import { BADGE_VARIANTS } from './badge.types';

const meta: Meta<BadgeComponent> = {
  title: 'Design System / Components / Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/Mu9JwRHYdwbyYVNRe63par/Buddy?node-id=51-817&m=dev',
  },
  argTypes: {
    variant: { control: 'select', options: BADGE_VARIANTS },
    dot: { control: 'boolean' },
  },
  args: { variant: 'success', dot: false },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k9-badge ${argsToTemplate(args)}>Status</k9-badge>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [BadgeComponent],
    template: `
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;padding:24px;background:#0F1419">
        <k9-badge variant="success" [dot]="true">Active</k9-badge>
        <k9-badge variant="warning">Warning</k9-badge>
        <k9-badge variant="error">Error</k9-badge>
        <k9-badge variant="neutral">Neutral</k9-badge>
      </div>
    `,
  }),
};
