export interface SelectOption {
  label: string;
  value: any;
  disabled?: boolean;
}

export interface SelectState {
  disabled: boolean;
  hasError: boolean;
  isOpen: boolean;
}
