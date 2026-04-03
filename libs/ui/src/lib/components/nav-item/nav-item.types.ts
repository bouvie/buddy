export type NavItemVariant = 'bottom' | 'side';

export interface NavItemConfig {
  label: string;
  route: string | string[];
  icon: string;
  badge?: number;
}

export const NAV_ITEM_VARIANTS = ['bottom', 'side'] as const;
