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
import type { SegmentedItem, SegmentedSize, SegmentedColor } from './segmented.types';
import { SEGMENTED_SIZES, SEGMENTED_COLORS } from './segmented.types';

@Component({
  selector: 'k10-segmented',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './segmented.component.html',
  styleUrls: ['./segmented.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SegmentedComponent),
      multi: true,
    },
  ],
})
export class SegmentedComponent implements ControlValueAccessor {
  readonly items = input<SegmentedItem[]>([]);
  readonly size  = input<SegmentedSize>('md');
  readonly color = input<SegmentedColor>('primary');

  readonly disabledInput = input(false, { alias: 'disabled' });
  private readonly _disabledByForm = signal(false);
  readonly disabled = computed(() => this.disabledInput() || this._disabledByForm());

  readonly value   = model('');
  readonly changed = output<string>();

  readonly safeSize = computed<SegmentedSize>(() => {
    const s = this.size();
    return SEGMENTED_SIZES.includes(s) ? s : 'md';
  });

  readonly safeColor = computed<SegmentedColor>(() => {
    const c = this.color();
    return SEGMENTED_COLORS.includes(c) ? c : 'primary';
  });

  private _onChangeFn: (v: string) => void = () => {};
  private _onTouchedFn: () => void = () => {};

  select(item: SegmentedItem): void {
    if (this.disabled() || item.disabled) return;
    this.value.set(item.value);
    this._onChangeFn(item.value);
    this._onTouchedFn();
    this.changed.emit(item.value);
  }

  writeValue(v: string): void                    { this.value.set(v ?? ''); }
  registerOnChange(fn: (v: string) => void): void { this._onChangeFn = fn; }
  registerOnTouched(fn: () => void): void         { this._onTouchedFn = fn; }
  setDisabledState(isDisabled: boolean): void     { this._disabledByForm.set(isDisabled); }
}
