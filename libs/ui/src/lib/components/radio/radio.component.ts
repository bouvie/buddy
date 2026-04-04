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

@Component({
  selector: 'k10-radio',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements ControlValueAccessor {
  readonly label   = input('');
  readonly name    = input('');
  readonly value   = input<any>(undefined);
  readonly checked = input(false);

  readonly disabledInput = input(false, { alias: 'disabled' });
  private readonly _disabledByForm = signal(false);
  readonly disabled = computed(() => this.disabledInput() || this._disabledByForm());

  readonly radioChange = output<any>();

  private _onChangeFn: (value: any) => void = () => {};
  private _onTouchedFn: () => void = () => {};
  private _formValue = signal<any>(undefined);

  readonly isChecked = computed(() => this._formValue() === this.value() || this.checked());

  handleRadioChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this._formValue.set(this.value());
      this._onChangeFn(this.value());
      this._onTouchedFn();
      this.radioChange.emit(this.value());
    }
  }

  writeValue(value: any): void    { this._formValue.set(value); }
  registerOnChange(fn: (v: any) => void): void { this._onChangeFn = fn; }
  registerOnTouched(fn: () => void): void      { this._onTouchedFn = fn; }
  setDisabledState(isDisabled: boolean): void  { this._disabledByForm.set(isDisabled); }
}
