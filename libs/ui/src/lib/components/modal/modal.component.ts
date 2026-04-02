import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  computed,
  HostListener,
} from '@angular/core';
import type { ModalSize } from './modal.types';
import { MODAL_SIZES } from './modal.types';

@Component({
  selector: 'k9-modal',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  readonly isOpen      = input(false);
  readonly title       = input('');
  readonly dismissible = input(true);
  readonly size        = input<ModalSize>('md');

  readonly safeSize = computed<ModalSize>(() => {
    const s = this.size();
    if (!MODAL_SIZES.includes(s)) {
      console.warn(`[ModalComponent] Invalid size: ${s}. Using 'md'.`);
      return 'md';
    }
    return s;
  });

  readonly closed = output<void>();

  close(): void {
    if (this.dismissible()) this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.close();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen()) this.close();
  }
}
