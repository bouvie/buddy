import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  model,
  signal,
  computed,
  forwardRef,
  viewChild,
  ElementRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'k9-checkbox',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  readonly checkboxInput = viewChild<ElementRef<HTMLInputElement>>('checkboxInput');

  readonly id           = input('');
  readonly label        = input('');
  readonly indeterminate = input(false);

  /** Two-way bindable via [(checked)]="x" ou reactive form */
  readonly checked = model(false);

  readonly disabledInput = input(false, { alias: 'disabled' });
  private readonly _disabledByForm = signal(false);
  readonly disabled = computed(() => this.disabledInput() || this._disabledByForm());

  readonly checkChange = output<boolean>();

  private _onChangeFn: (value: boolean) => void = () => {};
  private _onTouchedFn: () => void = () => {};

  onCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.checked.set(target.checked);
    this._onChangeFn(target.checked);
    this.checkChange.emit(target.checked);
  }

  writeValue(value: any): void    { this.checked.set(!!value); }
  registerOnChange(fn: (v: boolean) => void): void { this._onChangeFn = fn; }
  registerOnTouched(fn: () => void): void          { this._onTouchedFn = fn; }
  setDisabledState(isDisabled: boolean): void      { this._disabledByForm.set(isDisabled); }
}
