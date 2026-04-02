import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  signal,
  computed,
  forwardRef,
  ElementRef,
  HostListener,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import type { SelectOption } from './select.types';

@Component({
  selector: 'k9-select',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  readonly placeholder  = input('Sélectionner…');
  readonly options      = input<SelectOption[]>([]);
  readonly label        = input('');
  readonly id           = input('');
  readonly hasError     = input(false);
  readonly errorMessage = input('');

  readonly disabledInput = input(false, { alias: 'disabled' });
  private readonly _disabledByForm = signal(false);
  readonly disabled = computed(() => this.disabledInput() || this._disabledByForm());

  private readonly _selectedValue = signal<any>('');
  readonly selectedValue = this._selectedValue.asReadonly();

  readonly isOpen = signal(false);

  readonly displayLabel = computed(() => {
    const val = this._selectedValue();
    const opt = this.options().find(o => o.value === val);
    return opt ? opt.label : this.placeholder();
  });

  readonly hasSelection = computed(() => !!this._selectedValue());

  readonly selected = output<any>();

  private _onChangeFn: (value: any) => void = () => {};
  private _onTouchedFn: () => void = () => {};

  constructor(private readonly _el: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this._el.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }

  toggle(): void {
    if (this.disabled()) return;
    this.isOpen.update(v => !v);
  }

  selectOption(option: SelectOption): void {
    if (option.disabled) return;
    this._selectedValue.set(option.value);
    this._onChangeFn(option.value);
    this._onTouchedFn();
    this.selected.emit(option.value);
    this.isOpen.set(false);
  }

  writeValue(value: any): void    { this._selectedValue.set(value ?? ''); }
  registerOnChange(fn: (v: any) => void): void { this._onChangeFn = fn; }
  registerOnTouched(fn: () => void): void      { this._onTouchedFn = fn; }
  setDisabledState(isDisabled: boolean): void  { this._disabledByForm.set(isDisabled); }
}
