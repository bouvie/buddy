import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  computed,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import type { ToastVariant, ToastPosition } from './toast.types';
import { TOAST_VARIANTS, TOAST_POSITIONS } from './toast.types';

@Component({
  selector: 'k9-toast',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
})
export class ToastComponent implements OnChanges, OnDestroy {
  readonly variant     = input<ToastVariant>('info');
  readonly position    = input<ToastPosition>('bottom-right');
  readonly message     = input('');
  readonly visible     = input(false);
  readonly duration    = input(4000);
  readonly dismissible = input(true);

  readonly safeVariant = computed<ToastVariant>(() => {
    const v = this.variant();
    return TOAST_VARIANTS.includes(v) ? v : 'info';
  });

  readonly safePosition = computed<ToastPosition>(() => {
    const p = this.position();
    return TOAST_POSITIONS.includes(p) ? p : 'bottom-right';
  });

  readonly dismissed = output<void>();

  private timer?: ReturnType<typeof setTimeout>;

  ngOnChanges(): void {
    if (this.visible() && this.duration() > 0) {
      this.clearTimer();
      this.timer = setTimeout(() => this.dismissed.emit(), this.duration());
    }
  }

  ngOnDestroy(): void { this.clearTimer(); }

  dismiss(): void {
    this.clearTimer();
    this.dismissed.emit();
  }

  private clearTimer(): void {
    if (this.timer) { clearTimeout(this.timer); this.timer = undefined; }
  }
}
