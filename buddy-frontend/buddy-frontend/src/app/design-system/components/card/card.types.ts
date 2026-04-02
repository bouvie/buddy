export type CardPadding = 'none' | 'sm' | 'md' | 'lg';
export type CardElevation = 'none' | 'sm' | 'md' | 'lg';

export interface CardState {
  padding: CardPadding;
  elevation: CardElevation;
  border: boolean;
  interactive: boolean;
}
