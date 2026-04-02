export type ListItemVariant =
  | 'toggle'
  | 'navigation'
  | 'text-value'
  | 'skeleton'
  | 'status-error';

export const LIST_ITEM_VARIANTS = [
  'toggle',
  'navigation',
  'text-value',
  'skeleton',
  'status-error',
] as const;

export interface ListItemData {
  variant: ListItemVariant;
  /** Classe Font Awesome (ex: "fa-solid fa-wifi") */
  icon?: string;
  label: string;
  sublabel?: string;
  /** Texte à droite — variant "text-value" */
  value?: string;
  /** État initial du toggle — variant "toggle" */
  checked?: boolean;
}
