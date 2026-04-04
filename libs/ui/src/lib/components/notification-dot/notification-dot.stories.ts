import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { NotificationDotComponent } from './notification-dot.component';
import { NOTIFICATION_DOT_VARIANTS, NOTIFICATION_DOT_SIZES } from './notification-dot.types';

const meta: Meta<NotificationDotComponent> = {
  title: 'Design System / Components / NotificationDot',
  component: NotificationDotComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=12-135',
  },
  argTypes: {
    variant: { control: 'select', options: NOTIFICATION_DOT_VARIANTS },
    size:    { control: 'select', options: NOTIFICATION_DOT_SIZES },
    count:   { control: 'number' },
    pulse:   { control: 'boolean' },
  },
  args: { variant: 'danger', size: 'sm', pulse: false },
};

export default meta;
type Story = StoryObj<NotificationDotComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k10-notification-dot ${argsToTemplate(args)}></k10-notification-dot>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [NotificationDotComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:32px;background:#0C1219">

        <div style="display:flex;gap:16px;align-items:center">
          <k10-notification-dot variant="danger"  size="xs"></k10-notification-dot>
          <k10-notification-dot variant="danger"  size="sm"></k10-notification-dot>
          <k10-notification-dot variant="danger"  size="md"></k10-notification-dot>
          <k10-notification-dot variant="danger"  size="md" [count]="3"></k10-notification-dot>
          <k10-notification-dot variant="danger"  size="md" [count]="99"></k10-notification-dot>
          <k10-notification-dot variant="danger"  size="md" [count]="150"></k10-notification-dot>
        </div>

        <div style="display:flex;gap:16px;align-items:center">
          <k10-notification-dot variant="danger"  size="sm"></k10-notification-dot>
          <k10-notification-dot variant="primary" size="sm"></k10-notification-dot>
          <k10-notification-dot variant="accent"  size="sm"></k10-notification-dot>
          <k10-notification-dot variant="warning" size="sm"></k10-notification-dot>
          <k10-notification-dot variant="success" size="sm"></k10-notification-dot>
        </div>

        <div style="display:flex;gap:16px;align-items:center">
          <k10-notification-dot variant="danger"  size="sm" [pulse]="true"></k10-notification-dot>
          <k10-notification-dot variant="accent"  size="sm" [pulse]="true"></k10-notification-dot>
          <k10-notification-dot variant="success" size="sm" [pulse]="true"></k10-notification-dot>
        </div>

      </div>
    `,
  }),
};
