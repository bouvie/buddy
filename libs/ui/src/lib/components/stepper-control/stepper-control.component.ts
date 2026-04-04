import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  model,
  computed,
  signal,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { StepperControlVariant } from './stepper-control.types';
import { STEPPER_CONTROL_VARIANTS } from './stepper-control.types';

@Component({
  selector: 'k10-stepper',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stepper-control.component.html',
  styleUrls: ['./stepper-control.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StepperControlComponent),
      multi: true,
    },
  ],
})
export class StepperControlComponent implements ControlValueAccessor {
  readonly variant = input<StepperControlVariant>('default');
  readonly min     = input(0);
  readonly max     = input(99);
  readonly step    = input(1);

  readonly disabledInput = input(false, { alias: 'disabled' });
  private readonly _disabledByForm = signal(false);
  readonly disabled = computed(() => this.disabledInput() || this._disabledByForm());

  readonly value   = model(0);
  readonly changed = output<number>();

  readonly safeVariant = computed<StepperControlVariant>(() => {
    const v = this.variant();
    return STEPPER_CONTROL_VARIANTS.includes(v) ? v : 'default';
  });

  readonly atMin = computed(() => this.value() <= this.min());
  readonly atMax = computed(() => this.value() >= this.max());

  private _onChangeFn: (v: number) => void = () => {};
  private _onTouchedFn: () => void = () => {};

  decrement(): void {
    if (this.disabled() || this.atMin()) return;
    const next = Math.max(this.min(), this.value() - this.step());
    this._emit(next);
  }

  increment(): void {
    if (this.disabled() || this.atMax()) return;
    const next = Math.min(this.max(), this.value() + this.step());
    this._emit(next);
  }

  private _emit(v: number): void {
    this.value.set(v);
    this._onChangeFn(v);
    this._onTouchedFn();
    this.changed.emit(v);
  }

  writeValue(v: number): void                    { this.value.set(v ?? 0); }
  registerOnChange(fn: (v: number) => void): void { this._onChangeFn = fn; }
  registerOnTouched(fn: () => void): void         { this._onTouchedFn = fn; }
  setDisabledState(isDisabled: boolean): void     { this._disabledByForm.set(isDisabled); }
}
