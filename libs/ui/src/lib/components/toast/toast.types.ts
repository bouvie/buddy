export type ToastVariant = 'info' | 'success' | 'warning' | 'error' | 'neutral';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export const TOAST_VARIANTS = ['info', 'success', 'warning', 'error', 'neutral'] as const;
export const TOAST_POSITIONS = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const;
