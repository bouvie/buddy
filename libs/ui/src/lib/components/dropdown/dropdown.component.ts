import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  signal,
  HostListener,
} from '@angular/core';
import type { DropdownItem } from './dropdown.types';

@Component({
  selector: 'k10-dropdown',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  readonly items        = input<DropdownItem[]>([]);
  readonly triggerLabel = input('Options');
  readonly disabled     = input(false);

  readonly itemSelected = output<DropdownItem>();

  readonly isOpen = signal(false);

  toggle(): void {
    if (!this.disabled()) this.isOpen.update(v => !v);
  }

  select(item: DropdownItem): void {
    if (!item.disabled) {
      this.itemSelected.emit(item);
      this.isOpen.set(false);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!(event.target as Element).closest('app-dropdown')) {
      this.isOpen.set(false);
    }
  }
}
