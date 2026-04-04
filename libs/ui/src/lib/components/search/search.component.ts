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
import type { SearchSize } from './search.types';
import { SEARCH_SIZES } from './search.types';

@Component({
  selector: 'k10-search',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true,
    },
  ],
})
export class SearchComponent implements ControlValueAccessor {
  readonly size = input<SearchSize>('md');
  readonly placeholder = input('Search…');
  readonly id = input('');

  readonly disabledInput = input(false, { alias: 'disabled' });
  private readonly _disabledByForm = signal(false);
  readonly disabled = computed(() => this.disabledInput() || this._disabledByForm());

  readonly value = model('');
  readonly cleared = output<void>();
  readonly searched = output<string>();

  readonly safeSize = computed<SearchSize>(() => {
    const s = this.size();
    return SEARCH_SIZES.includes(s) ? s : 'md';
  });

  private _onChangeFn: (v: string) => void = () => {};
  private _onTouchedFn: () => void = () => {};

  onInput(event: Event): void {
    const val = (event.target as HTMLInputElement).value;
    this.value.set(val);
    this._onChangeFn(val);
    this._onTouchedFn();
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') this.searched.emit(this.value());
  }

  clear(): void {
    this.value.set('');
    this._onChangeFn('');
    this.cleared.emit();
  }

  writeValue(v: string): void {
    this.value.set(v ?? '');
  }
  registerOnChange(fn: (v: string) => void): void {
    this._onChangeFn = fn;
  }
  registerOnTouched(fn: () => void): void {
    this._onTouchedFn = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this._disabledByForm.set(isDisabled);
  }
}
