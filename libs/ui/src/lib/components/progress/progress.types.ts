export type ProgressSize = 'sm' | 'md' | 'lg';

export interface ProgressState {
  value: number;
  size: ProgressSize;
  showLabel: boolean;
}
