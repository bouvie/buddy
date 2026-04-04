import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { BUTTON_VARIANTS, BUTTON_SIZES } from './button.types';

const meta: Meta<ButtonComponent> = {
  title: 'Design System / Components / Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=4-2',
  },
  argTypes: {
    variant:   { control: 'select', options: BUTTON_VARIANTS },
    size:      { control: 'select', options: BUTTON_SIZES },
    disabled:  { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    type:      { control: 'select', options: ['button', 'submit', 'reset'] },
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
    template: `<k10-button ${argsToTemplate(args)}>Button</k10-button>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [ButtonComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:24px;background:#0C1219;min-width:400px">

        <div style="display:flex;gap:12px;align-items:center">
          <k10-button variant="primary"   size="sm">Primary</k10-button>
          <k10-button variant="primary"   size="md">Primary</k10-button>
          <k10-button variant="primary"   size="lg">Primary</k10-button>
          <k10-button variant="primary"   size="md" [disabled]="true">Disabled</k10-button>
        </div>

        <div style="display:flex;gap:12px;align-items:center">
          <k10-button variant="accent"    size="sm">Accent</k10-button>
          <k10-button variant="accent"    size="md">Accent</k10-button>
          <k10-button variant="accent"    size="lg">Accent</k10-button>
          <k10-button variant="accent"    size="md" [disabled]="true">Disabled</k10-button>
        </div>

        <div style="display:flex;gap:12px;align-items:center">
          <k10-button variant="secondary" size="sm">Secondary</k10-button>
          <k10-button variant="secondary" size="md">Secondary</k10-button>
          <k10-button variant="secondary" size="lg">Secondary</k10-button>
          <k10-button variant="secondary" size="md" [disabled]="true">Disabled</k10-button>
        </div>

        <div style="display:flex;gap:12px;align-items:center">
          <k10-button variant="ghost"     size="sm">Ghost</k10-button>
          <k10-button variant="ghost"     size="md">Ghost</k10-button>
          <k10-button variant="ghost"     size="lg">Ghost</k10-button>
          <k10-button variant="ghost"     size="md" [disabled]="true">Disabled</k10-button>
        </div>

        <div style="display:flex;gap:12px;align-items:center">
          <k10-button variant="danger"    size="sm">Danger</k10-button>
          <k10-button variant="danger"    size="md">Danger</k10-button>
          <k10-button variant="danger"    size="lg">Danger</k10-button>
          <k10-button variant="danger"    size="md" [disabled]="true">Disabled</k10-button>
        </div>

      </div>
    `,
  }),
};
