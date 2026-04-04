export type LiveIndicatorVariant = 'accent' | 'danger' | 'success' | 'warning';
export type LiveIndicatorSize    = 'sm' | 'md' | 'lg';
export type LiveIndicatorMode    = 'pill' | 'inline';

export const LIVE_INDICATOR_VARIANTS = ['accent', 'danger', 'success', 'warning'] as const;
export const LIVE_INDICATOR_SIZES    = ['sm', 'md', 'lg'] as const;
export const LIVE_INDICATOR_MODES    = ['pill', 'inline'] as const;
