export interface SliderState {
  value: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
  label: string;
}

export type SliderVariant = 'primary' | 'accent' | 'warning';
export const SLIDER_VARIANTS = ['primary', 'accent', 'warning'] as const;
