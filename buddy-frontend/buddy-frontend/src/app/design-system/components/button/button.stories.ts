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
    template: `<app-button ${argsToTemplate(args)}>Button</app-button>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display:flex;flex-direction:column;gap:32px;padding:24px;background:#0F1419;min-width:360px">
        <div style="display:flex;flex-direction:column;gap:8px">
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0">PRIMARY</p>
          <app-button variant="primary">Normal</app-button>
          <app-button variant="primary" [disabled]="true">Disabled</app-button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0">SECONDARY</p>
          <app-button variant="secondary">Normal</app-button>
          <app-button variant="secondary" [disabled]="true">Disabled</app-button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0">GHOST</p>
          <app-button variant="ghost">Normal</app-button>
          <app-button variant="ghost" [disabled]="true">Disabled</app-button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0">DANGER</p>
          <app-button variant="danger">Normal</app-button>
          <app-button variant="danger" [disabled]="true">Disabled</app-button>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <p style="color:#8E928B;font-size:10px;font-family:Manrope,sans-serif;letter-spacing:.3em;margin:0">SIZES</p>
          <app-button size="sm">Small — 48px</app-button>
          <app-button size="md">Medium — 64px</app-button>
          <app-button size="lg">Large — 72px</app-button>
        </div>
      </div>
    `,
  }),
};
