export type NavItemVariant = 'bottom' | 'side';
export type NavItemColor   = 'primary' | 'accent';

export interface NavItemConfig {
  label: string;
  route: string | string[];
  icon: string;
  badge?: number;
}

export const NAV_ITEM_VARIANTS = ['bottom', 'side'] as const;
export const NAV_ITEM_COLORS   = ['primary', 'accent'] as const;
