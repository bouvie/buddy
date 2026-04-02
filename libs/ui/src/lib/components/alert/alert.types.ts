export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertState {
  variant: AlertVariant;
  dismissible: boolean;
  visible: boolean;
}
