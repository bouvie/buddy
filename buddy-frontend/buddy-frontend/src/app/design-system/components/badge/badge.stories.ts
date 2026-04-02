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
    template: `<app-badge ${argsToTemplate(args)}>Status</app-badge>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [BadgeComponent],
    template: `
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;padding:24px;background:#0F1419">
        <app-badge variant="success" [dot]="true">Active</app-badge>
        <app-badge variant="warning">Warning</app-badge>
        <app-badge variant="error">Error</app-badge>
        <app-badge variant="neutral">Neutral</app-badge>
      </div>
    `,
  }),
};
