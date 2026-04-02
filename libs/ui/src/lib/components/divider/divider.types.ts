export type DividerVariant = 'simple' | 'labeled' | 'progress';

export interface DividerState {
  variant: DividerVariant;
  label: string;
}

export const DIVIDER_VARIANTS = ['simple', 'labeled', 'progress'] as const;
