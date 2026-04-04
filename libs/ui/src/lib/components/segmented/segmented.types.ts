export interface SegmentedItem {
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
}

export type SegmentedSize  = 'sm' | 'md';
export type SegmentedColor = 'primary' | 'accent' | 'secondary';

export const SEGMENTED_SIZES  = ['sm', 'md'] as const;
export const SEGMENTED_COLORS = ['primary', 'accent', 'secondary'] as const;
