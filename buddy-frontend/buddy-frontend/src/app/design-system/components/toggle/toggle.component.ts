import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  model,
  signal,
  computed,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true,
    },
  ],
})
export class ToggleComponent implements ControlValueAccessor {
  /** Two-way bindable via [(checked)]="x" ou reactive form */
  readonly checked = model(false);
  readonly label   = input('');

  /** disabled peut venir de l'input parent ou de setDisabledState (CVA) */
  readonly disabledInput = input(false, { alias: 'disabled' });
  private readonly _disabledByForm = signal(false);
  readonly disabled = computed(() => this.disabledInput() || this._disabledByForm());

  readonly toggled = output<boolean>();

  private _onChangeFn: (value: boolean) => void = () => {};
  private _onTouchedFn: () => void = () => {};

  onToggleChange(value: boolean): void {
    if (this.disabled()) return;
    this.checked.set(value);
    this._onChangeFn(value);
    this._onTouchedFn();
    this.toggled.emit(value);
  }

  writeValue(value: any): void    { this.checked.set(!!value); }
  registerOnChange(fn: (v: boolean) => void): void { this._onChangeFn = fn; }
  registerOnTouched(fn: () => void): void          { this._onTouchedFn = fn; }
  setDisabledState(isDisabled: boolean): void      { this._disabledByForm.set(isDisabled); }
}
