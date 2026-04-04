import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { SliderComponent } from './slider.component';
import { SLIDER_VARIANTS } from './slider.types';

const meta: Meta<SliderComponent> = {
  title: 'Design System / Components / Slider',
  component: SliderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=10-2',
  },
  argTypes: {
    label:    { control: 'text' },
    variant:  { control: 'select', options: SLIDER_VARIANTS },
    min:      { control: 'number' },
    max:      { control: 'number' },
    step:     { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Intensity', variant: 'primary', min: 0, max: 100, step: 1 },
};

export default meta;
type Story = StoryObj<SliderComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<div style="max-width:360px;padding:24px;background:#0C1219"><k10-slider ${argsToTemplate(args)}></k10-slider></div>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [SliderComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;max-width:360px;padding:24px;background:#0C1219">
        <k10-slider label="Workout Intensity"  variant="primary" [value]="65"></k10-slider>
        <k10-slider label="GPS Precision"      variant="accent"  [value]="80"></k10-slider>
        <k10-slider label="Alert Threshold"    variant="warning" [value]="40"></k10-slider>
        <k10-slider label="Recovery (disabled)"               [value]="50" [disabled]="true"></k10-slider>
      </div>
    `,
  }),
};
