import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';
import { ButtonComponent } from '../button/button.component';
import { TOOLTIP_POSITIONS } from './tooltip.types';

const meta: Meta<TooltipComponent> = {
  title: 'Design System / Components / Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
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
      <k9-tooltip ${argsToTemplate(args)}>
        <k9-button variant="secondary">Survolez-moi</k9-button>
      </k9-tooltip>
    `,
  }),
};

export const AllPositions: Story = {
  render: () => ({
    imports: [TooltipComponent, ButtonComponent],
    template: `
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:64px;padding:64px">
        <k9-tooltip position="top" content="Position : top">
          <k9-button variant="secondary">Top</k9-button>
        </k9-tooltip>
        <k9-tooltip position="bottom" content="Position : bottom">
          <k9-button variant="secondary">Bottom</k9-button>
        </k9-tooltip>
        <k9-tooltip position="left" content="Position : left">
          <k9-button variant="secondary">Left</k9-button>
        </k9-tooltip>
        <k9-tooltip position="right" content="Position : right">
          <k9-button variant="secondary">Right</k9-button>
        </k9-tooltip>
      </div>
    `,
  }),
};
