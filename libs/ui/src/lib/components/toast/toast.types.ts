export type ToastVariant = 'info' | 'success' | 'warning' | 'error';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export const TOAST_VARIANTS = ['info', 'success', 'warning', 'error'] as const;
export const TOAST_POSITIONS = ['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const;
