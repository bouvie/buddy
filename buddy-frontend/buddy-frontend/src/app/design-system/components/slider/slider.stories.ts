import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { SliderComponent } from './slider.component';

const meta: Meta<SliderComponent> = {
  title: 'Design System / Components / Slider',
  component: SliderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/Mu9JwRHYdwbyYVNRe63par/Buddy?node-id=51-817&m=dev',
  },
  argTypes: {
    label: { control: 'text' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    value: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: { label: 'Intensity', min: 0, max: 100, step: 1 },
};

export default meta;
type Story = StoryObj<SliderComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<div style="max-width:360px;padding:24px;background:#0F1419"><app-slider ${argsToTemplate(args)}></app-slider></div>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [SliderComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;max-width:360px;padding:24px;background:#0F1419">
        <app-slider label="Intensity" [value]="60"></app-slider>
        <app-slider label="Recovery" [value]="30"></app-slider>
        <app-slider label="Disabled" [value]="50" [disabled]="true"></app-slider>
      </div>
    `,
  }),
};
