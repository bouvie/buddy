export type CardVariant = 'default' | 'elevated' | 'outlined' | 'primary' | 'accent' | 'glass';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardState {
  variant: CardVariant;
  padding: CardPadding;
  interactive: boolean;
  isLive: boolean;
}

export const CARD_VARIANTS = ['default', 'elevated', 'outlined', 'primary', 'accent', 'glass'] as const;
export const CARD_PADDINGS = ['none', 'sm', 'md', 'lg'] as const;
