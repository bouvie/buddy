import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { ProgressSize, ProgressVariant } from './progress.types';
import { PROGRESS_VARIANTS } from './progress.types';

@Component({
  selector: 'k10-progress',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  readonly value     = input(0);
  readonly size      = input<ProgressSize>('md');
  readonly variant   = input<ProgressVariant>('primary');
  readonly showLabel = input(true);

  readonly clampedValue = computed(() => Math.min(100, Math.max(0, this.value())));

  readonly safeVariant = computed<ProgressVariant>(() => {
    const v = this.variant();
    return PROGRESS_VARIANTS.includes(v) ? v : 'primary';
  });
}
