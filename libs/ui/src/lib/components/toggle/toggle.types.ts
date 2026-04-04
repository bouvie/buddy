export interface ToggleState {
  enabled: boolean;
  disabled: boolean;
}

export type ToggleVariant = 'primary' | 'accent';
export const TOGGLE_VARIANTS = ['primary', 'accent'] as const;
