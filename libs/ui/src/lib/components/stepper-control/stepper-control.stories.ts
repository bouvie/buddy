import { Meta, StoryObj } from '@storybook/angular';
import { StepperControlComponent } from './stepper-control.component';
import { STEPPER_CONTROL_VARIANTS } from './stepper-control.types';
import { signal } from '@angular/core';

const meta: Meta<StepperControlComponent> = {
  title: 'Design System / Components / Stepper',
  component: StepperControlComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=10-123',
  },
  argTypes: {
    variant: { control: 'select', options: STEPPER_CONTROL_VARIANTS },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    value: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: { variant: 'default', min: 0, max: 99, step: 1, value: 3, disabled: signal(false) },
};

export default meta;
type Story = StoryObj<StepperControlComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<k10-stepper
      [variant]="variant"
      [min]="min"
      [max]="max"
      [step]="step"
      [value]="value"
      [disabled]="disabled"
    ></k10-stepper>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    imports: [StepperControlComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:24px;padding:32px;background:#0C1219">

        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
            <span style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em">Default</span>
            <k10-stepper variant="default" [value]="3" [min]="0" [max]="99"></k10-stepper>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
            <span style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em">Accent</span>
            <k10-stepper variant="accent" [value]="5" [min]="0" [max]="99"></k10-stepper>
          </div>
        </div>

        <div style="display:flex;gap:24px;align-items:center">
          <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
            <span style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em">At min</span>
            <k10-stepper [value]="0" [min]="0" [max]="10"></k10-stepper>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
            <span style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em">At max</span>
            <k10-stepper [value]="10" [min]="0" [max]="10"></k10-stepper>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
            <span style="color:#68788C;font-size:10px;text-transform:uppercase;letter-spacing:.08em">Disabled</span>
            <k10-stepper [value]="5" [disabled]="true"></k10-stepper>
          </div>
        </div>

      </div>
    `,
  }),
};
