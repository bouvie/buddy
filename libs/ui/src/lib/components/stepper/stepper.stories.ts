import { Meta, StoryObj } from '@storybook/angular';
import { StepperComponent } from './stepper.component';
import { STEPPER_ORIENTATIONS } from './stepper.types';

const STEPS_BASIC = [
  { label: 'Profile',  description: 'Basic info' },
  { label: 'Dog',      description: 'Add companion' },
  { label: 'Device',   description: 'Pair tracker' },
  { label: 'Complete', description: 'Ready to go' },
];

const STEPS_PROGRESS = [
  { label: 'Profile',  description: 'Done', completed: true },
  { label: 'Dog',      description: 'Done', completed: true },
  { label: 'Device',   description: 'In progress' },
  { label: 'Complete', description: 'Pending' },
];

const STEPS_ERROR = [
  { label: 'Sync',      completed: true },
  { label: 'Validate',  error: true },
  { label: 'Push',      description: 'Waiting' },
];

const meta: Meta<StepperComponent> = {
  title: 'Design System / Components / Steps',
  component: StepperComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=10-123',
  },
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    activeStep:  { control: { type: 'range', min: 0, max: 3, step: 1 } },
  },
  args: { steps: STEPS_BASIC, activeStep: 1, orientation: 'horizontal' },
};

export default meta;
type Story = StoryObj<StepperComponent>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: () => ({
    imports: [StepperComponent],
    template: `
      <div style="display:flex;flex-direction:column;gap:40px;padding:32px;background:#0C1219">

        <div>
          <p style="color:#6B7A8C;font-size:11px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 16px">Horizontal — Step 2 active</p>
          <k10-steps [steps]="basic" [activeStep]="2" orientation="horizontal"></k10-steps>
        </div>

        <div>
          <p style="color:#6B7A8C;font-size:11px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 16px">Horizontal — In progress (with labels)</p>
          <k10-steps [steps]="progress" [activeStep]="2" orientation="horizontal"></k10-steps>
        </div>

        <div>
          <p style="color:#6B7A8C;font-size:11px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 16px">Horizontal — Error state</p>
          <k10-steps [steps]="error" [activeStep]="1" orientation="horizontal"></k10-steps>
        </div>

        <div style="display:flex;gap:48px">
          <div>
            <p style="color:#6B7A8C;font-size:11px;text-transform:uppercase;letter-spacing:.08em;margin:0 0 16px">Vertical</p>
            <k10-steps [steps]="progress" [activeStep]="2" orientation="vertical"></k10-steps>
          </div>
        </div>

      </div>
    `,
    props: {
      basic:    STEPS_BASIC,
      progress: STEPS_PROGRESS,
      error:    STEPS_ERROR,
    },
  }),
};
