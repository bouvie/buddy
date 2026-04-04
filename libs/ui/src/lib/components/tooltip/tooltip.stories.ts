import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';
import { ButtonComponent } from '../button/button.component';
import { TOOLTIP_POSITIONS } from './tooltip.types';

const meta: Meta<TooltipComponent> = {
  title: 'Design System / Components / Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=30-52' },
  argTypes: {
    position: { control: 'select', options: TOOLTIP_POSITIONS },
    content: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  args: {
    position: 'top',
    content: 'Info contextuelle',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<TooltipComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <k10-tooltip ${argsToTemplate(args)}>
        <k10-button variant="secondary">Survolez-moi</k10-button>
      </k10-tooltip>
    `,
  }),
};

export const AllPositions: Story = {
  render: () => ({
    imports: [TooltipComponent, ButtonComponent],
    template: `
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:64px;padding:64px">
        <k10-tooltip position="top" content="Position : top">
          <k10-button variant="secondary">Top</k10-button>
        </k10-tooltip>
        <k10-tooltip position="bottom" content="Position : bottom">
          <k10-button variant="secondary">Bottom</k10-button>
        </k10-tooltip>
        <k10-tooltip position="left" content="Position : left">
          <k10-button variant="secondary">Left</k10-button>
        </k10-tooltip>
        <k10-tooltip position="right" content="Position : right">
          <k10-button variant="secondary">Right</k10-button>
        </k10-tooltip>
      </div>
    `,
  }),
};
