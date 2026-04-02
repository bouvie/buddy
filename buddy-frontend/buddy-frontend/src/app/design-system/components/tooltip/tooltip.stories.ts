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
      <app-tooltip ${argsToTemplate(args)}>
        <app-button variant="secondary">Survolez-moi</app-button>
      </app-tooltip>
    `,
  }),
};

export const AllPositions: Story = {
  render: () => ({
    imports: [TooltipComponent, ButtonComponent],
    template: `
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:64px;padding:64px">
        <app-tooltip position="top" content="Position : top">
          <app-button variant="secondary">Top</app-button>
        </app-tooltip>
        <app-tooltip position="bottom" content="Position : bottom">
          <app-button variant="secondary">Bottom</app-button>
        </app-tooltip>
        <app-tooltip position="left" content="Position : left">
          <app-button variant="secondary">Left</app-button>
        </app-tooltip>
        <app-tooltip position="right" content="Position : right">
          <app-button variant="secondary">Right</app-button>
        </app-tooltip>
      </div>
    `,
  }),
};
