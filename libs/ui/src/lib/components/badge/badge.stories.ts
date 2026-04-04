import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import { BADGE_VARIANTS } from './badge.types';

const meta: Meta<BadgeComponent> = {
  title: 'Design System / Components / Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=4-50',
  },
  argTypes: {
    variant: { control: 'select', options: BADGE_VARIANTS },
    dot:     { control: 'boolean' },
  },
  args: { variant: 'primary', dot: false },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k10-badge ${argsToTemplate(args)}>Status</k10-badge>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [BadgeComponent],
    template: `
      <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;padding:24px;background:#0C1219">
        <k10-badge variant="primary">Primary</k10-badge>
        <k10-badge variant="accent">Accent</k10-badge>
        <k10-badge variant="secondary">Secondary</k10-badge>
        <k10-badge variant="danger">Danger</k10-badge>
        <k10-badge variant="success">Success</k10-badge>
        <k10-badge variant="warning">Warning</k10-badge>
        <k10-badge variant="info">Info</k10-badge>
        <k10-badge variant="neutral">Neutral</k10-badge>
      </div>
    `,
  }),
};
