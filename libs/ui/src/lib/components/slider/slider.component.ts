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
import type { SliderVariant } from './slider.types';
import { SLIDER_VARIANTS } from './slider.types';

@Component({
  selector: 'k10-slider',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderComponent),
      multi: true,
    },
  ],
})
export class SliderComponent implements ControlValueAccessor {
  readonly label   = input('');
  readonly min     = input(0);
  readonly max     = input(100);
  readonly step    = input(1);
  readonly variant = input<SliderVariant>('primary');

  readonly safeVariant = computed<SliderVariant>(() => {
    const v = this.variant();
    return SLIDER_VARIANTS.includes(v) ? v : 'primary';
  });

  readonly disabledInput = input(false, { alias: 'disabled' });
  private readonly _disabledByForm = signal(false);
  readonly disabled = computed(() => this.disabledInput() || this._disabledByForm());

  private readonly _value = signal(0);
  readonly value = this._value.asReadonly();

  readonly valueChange = output<number>();

  readonly fillPercent = computed(() => {
    const range = this.max() - this.min();
    return range === 0 ? 0 : ((this._value() - this.min()) / range) * 100;
  });

  private _onChangeFn: (value: number) => void = () => {};
  private _onTouchedFn: () => void = () => {};

  onInput(event: Event): void {
    const n = Number((event.target as HTMLInputElement).value);
    this._value.set(n);
    this._onChangeFn(n);
    this.valueChange.emit(n);
  }

  onBlur(): void { this._onTouchedFn(); }

  writeValue(value: any): void    { this._value.set(Number(value) || 0); }
  registerOnChange(fn: (v: number) => void): void { this._onChangeFn = fn; }
  registerOnTouched(fn: () => void): void         { this._onTouchedFn = fn; }
  setDisabledState(isDisabled: boolean): void     { this._disabledByForm.set(isDisabled); }
}
