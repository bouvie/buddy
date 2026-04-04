export interface Tab {
  label: string;
  value: string;
  disabled?: boolean;
}

export type TabsVariant = 'primary' | 'accent' | 'underline';
export const TABS_VARIANTS = ['primary', 'accent', 'underline'] as const;
