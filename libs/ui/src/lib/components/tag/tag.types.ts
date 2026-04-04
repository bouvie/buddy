export type TagVariant = 'default' | 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
export type TagSize    = 'sm' | 'md';

export const TAG_VARIANTS = ['default', 'primary', 'accent', 'success', 'warning', 'danger', 'info'] as const;
export const TAG_SIZES    = ['sm', 'md'] as const;
