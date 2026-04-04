import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  signal,
  computed,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { InputType } from './input.types';
import { INPUT_TYPES } from './input.types';

@Component({
  selector: 'k10-input',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  readonly type        = input<InputType>('text');
  readonly placeholder = input('');
  readonly id          = input('');
  readonly readOnly    = input(false);
  readonly hasError    = input(false);
  readonly hasSuccess  = input(false);

  readonly disabledInput = input(false, { alias: 'disabled' });
  private readonly _disabledByForm = signal(false);
  readonly disabled = computed(() => this.disabledInput() || this._disabledByForm());

  readonly safeType = computed<InputType>(() => {
    const t = this.type();
    if (!INPUT_TYPES.includes(t)) {
      console.warn(`[InputComponent] Invalid type: ${t}. Using 'text'.`);
      return 'text';
    }
    return t;
  });

  private readonly _value = signal('');
  readonly value = this._value.asReadonly();

  readonly filled = computed(() => this._value().length > 0);

  readonly valueChange = output<string>();
  readonly blurred     = output<Event>();
  readonly focused     = output<Event>();

  private _onChangeFn: (value: string) => void = () => {};
  private _onTouchedFn: () => void = () => {};

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this._value.set(val);
    this._onChangeFn(val);
    this.valueChange.emit(val);
  }

  onBlur(event: Event): void  { this.blurred.emit(event); this._onTouchedFn(); }
  onFocus(event: Event): void { this.focused.emit(event); }

  writeValue(value: any): void    { this._value.set(value ?? ''); }
  registerOnChange(fn: (v: string) => void): void { this._onChangeFn = fn; }
  registerOnTouched(fn: () => void): void         { this._onTouchedFn = fn; }
  setDisabledState(isDisabled: boolean): void     { this._disabledByForm.set(isDisabled); }
}
