import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { DividerComponent } from './divider.component';
import { DIVIDER_VARIANTS } from './divider.types';

const meta: Meta<DividerComponent> = {
  title: 'Design System / Components / Divider',
  component: DividerComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/Mu9JwRHYdwbyYVNRe63par/Buddy?node-id=51-817&m=dev',
  },
  argTypes: {
    variant: { control: 'select', options: DIVIDER_VARIANTS },
    label: { control: 'text' },
  },
  args: { variant: 'simple', label: '' },
};

export default meta;
type Story = StoryObj<DividerComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<div style="width:360px;padding:24px;background:#0F1419"><k9-divider ${argsToTemplate(args)}></k9-divider></div>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [DividerComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;width:360px;padding:24px;background:#0F1419">
        <k9-divider variant="simple"></k9-divider>
        <k9-divider variant="labeled" label="Or continue with"></k9-divider>
        <k9-divider variant="progress"></k9-divider>
      </div>
    `,
  }),
};
