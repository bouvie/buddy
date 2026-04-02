export type SpinnerSize = 'sm' | 'md' | 'lg';
export type SpinnerVariant = 'primary' | 'secondary' | 'white';

export interface SpinnerState {
  size: SpinnerSize;
  variant: SpinnerVariant;
  label: string;
}
