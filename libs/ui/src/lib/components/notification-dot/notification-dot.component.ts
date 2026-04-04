import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { NotificationDotVariant, NotificationDotSize } from './notification-dot.types';
import { NOTIFICATION_DOT_VARIANTS, NOTIFICATION_DOT_SIZES } from './notification-dot.types';

@Component({
  selector: 'k10-notification-dot',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './notification-dot.component.html',
  styleUrls: ['./notification-dot.component.css'],
})
export class NotificationDotComponent {
  readonly variant = input<NotificationDotVariant>('danger');
  readonly size    = input<NotificationDotSize>('sm');
  readonly count   = input<number | null>(null);
  readonly pulse   = input(false);

  readonly safeVariant = computed<NotificationDotVariant>(() => {
    const v = this.variant();
    return NOTIFICATION_DOT_VARIANTS.includes(v) ? v : 'danger';
  });

  readonly safeSize = computed<NotificationDotSize>(() => {
    const s = this.size();
    return NOTIFICATION_DOT_SIZES.includes(s) ? s : 'sm';
  });

  readonly displayCount = computed(() => {
    const c = this.count();
    if (c === null) return null;
    return c > 99 ? '99+' : String(c);
  });
}
