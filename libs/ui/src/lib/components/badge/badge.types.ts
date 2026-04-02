export type BadgeVariant = 'success' | 'warning' | 'error' | 'neutral';

export interface BadgeState {
  variant: BadgeVariant;
  dot: boolean;
}

export const BADGE_VARIANTS = ['success', 'warning', 'error', 'neutral'] as const;
