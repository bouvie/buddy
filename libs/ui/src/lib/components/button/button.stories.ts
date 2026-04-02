import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { BUTTON_VARIANTS, BUTTON_SIZES } from './button.types';

const meta: Meta<ButtonComponent> = {
  title: 'Design System / Components / Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/Mu9JwRHYdwbyYVNRe63par/Buddy?node-id=51-817&m=dev',
  },
  argTypes: {
    variant: { control: 'select', options: BUTTON_VARIANTS },
    size: { control: 'select', options: BUTTON_SIZES },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
    isLoading: false,
    type: 'button',
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k9-button ${argsToTemplate(args)}>Button</k9-button>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;padding:24px;background:#0F1419;min-width:360px">
        <div style="display:flex;flex-direction:column;gap:8px">
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0">PRIMARY</p>
          <k9-button variant="primary">Normal</k9-button>
          <k9-button variant="primary" [disabled]="true">Disabled</k9-button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0">SECONDARY</p>
          <k9-button variant="secondary">Normal</k9-button>
          <k9-button variant="secondary" [disabled]="true">Disabled</k9-button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0">GHOST</p>
          <k9-button variant="ghost">Normal</k9-button>
          <k9-button variant="ghost" [disabled]="true">Disabled</k9-button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0">DANGER</p>
          <k9-button variant="danger">Normal</k9-button>
          <k9-button variant="danger" [disabled]="true">Disabled</k9-button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0">SIZES</p>
          <k9-button size="sm">Small — 48px</k9-button>
          <k9-button size="md">Medium — 64px</k9-button>
          <k9-button size="lg">Large — 72px</k9-button>
        </div>
      </div>
    `,
  }),
};
