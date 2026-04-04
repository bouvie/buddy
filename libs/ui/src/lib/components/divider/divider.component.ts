import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { DividerVariant } from './divider.types';
import { DIVIDER_VARIANTS } from './divider.types';

@Component({
  selector: 'k10-divider',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.css'],
})
export class DividerComponent {
  readonly variant = input<DividerVariant>('simple');
  readonly label   = input('');

  readonly safeVariant = computed<DividerVariant>(() => {
    const v = this.variant();
    if (!DIVIDER_VARIANTS.includes(v)) {
      console.warn(`[DividerComponent] Invalid variant: ${v}. Using 'simple'.`);
      return 'simple';
    }
    return v;
  });
}
