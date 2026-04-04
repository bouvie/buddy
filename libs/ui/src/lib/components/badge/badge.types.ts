export type BadgeVariant =
  | 'primary'
  | 'accent'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info'
  | 'neutral';

export interface BadgeState {
  variant: BadgeVariant;
  dot: boolean;
}

export const BADGE_VARIANTS = [
  'primary', 'accent', 'secondary', 'danger',
  'success', 'warning', 'info', 'neutral',
] as const;
