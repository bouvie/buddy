export type InputType = 'text' | 'email' | 'password' | 'number' | 'search' | 'url';

export interface InputState {
  disabled: boolean;
  readOnly: boolean;
  hasError: boolean;
  hasSuccess: boolean;
  isFocused: boolean;
}

export const INPUT_TYPES = ['text', 'email', 'password', 'number', 'search', 'url'] as const;
