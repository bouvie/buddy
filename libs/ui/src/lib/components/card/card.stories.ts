import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { CardComponent } from './card.component';
import { CARD_VARIANTS } from './card.types';

const meta: Meta<CardComponent> = {
  title: 'Design System / Components / Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=11-2',
  },
  argTypes: {
    variant:     { control: 'select', options: CARD_VARIANTS },
    padding:     { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    title:       { control: 'text' },
    footer:      { control: 'boolean' },
    interactive: { control: 'boolean' },
    isLive:      { control: 'boolean' },
  },
  args: { variant: 'default', padding: 'md', title: '', footer: false, interactive: false, isLive: false },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <k10-card style="width:200px" ${argsToTemplate(args)}>
        <p style="color:#A8B4C4;font-size:13px;margin:0">Card content</p>
      </k10-card>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [CardComponent],
    template: `
      <div style="display:flex;gap:16px;flex-wrap:wrap;padding:24px;background:#0C1219;align-items:flex-start">

        <k10-card variant="default"  style="width:160px">
          <p style="color:#A8B4C4;font-size:11px;margin:0">Default</p>
        </k10-card>

        <k10-card variant="elevated" style="width:160px">
          <p style="color:#A8B4C4;font-size:11px;margin:0">Elevated</p>
        </k10-card>

        <k10-card variant="outlined" style="width:160px">
          <p style="color:#A8B4C4;font-size:11px;margin:0">Outlined</p>
        </k10-card>

        <k10-card variant="primary"  style="width:160px">
          <p style="color:#A8B4C4;font-size:11px;margin:0">Primary Tint</p>
        </k10-card>

        <k10-card variant="accent"   style="width:160px">
          <p style="color:#A8B4C4;font-size:11px;margin:0">Accent Tint</p>
        </k10-card>

        <k10-card variant="glass"    style="width:160px">
          <p style="color:#A8B4C4;font-size:11px;margin:0">Glass</p>
        </k10-card>

        <k10-card variant="accent" [isLive]="true" style="width:160px">
          <p style="color:#A8B4C4;font-size:11px;margin:0">Live (animated)</p>
        </k10-card>

      </div>
    `,
  }),
};
