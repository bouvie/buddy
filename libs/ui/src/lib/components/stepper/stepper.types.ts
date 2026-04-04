export interface StepsStep {
  label: string;
  description?: string;
  completed?: boolean;
  error?: boolean;
}

export type StepsOrientation = 'horizontal' | 'vertical';
export const STEPS_ORIENTATIONS = ['horizontal', 'vertical'] as const;

/** @deprecated Use StepsStep */
export type StepperStep = StepsStep;
/** @deprecated Use StepsOrientation */
export type StepperOrientation = StepsOrientation;
/** @deprecated Use STEPS_ORIENTATIONS */
export const STEPPER_ORIENTATIONS = STEPS_ORIENTATIONS;
