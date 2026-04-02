import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { BadgeVariant } from './badge.types';
import { BADGE_VARIANTS } from './badge.types';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
})
export class BadgeComponent {
  readonly variant = input<BadgeVariant>('success');
  readonly dot = input(false);

  readonly safeVariant = computed<BadgeVariant>(() => {
    const v = this.variant();
    if (!BADGE_VARIANTS.includes(v)) {
      console.warn(`[BadgeComponent] Invalid variant: ${v}. Using 'success'.`);
      return 'success';
    }
    return v;
  });
}
