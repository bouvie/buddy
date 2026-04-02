import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { ProgressSize } from './progress.types';

@Component({
  selector: 'k9-progress',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  readonly value     = input(0);
  readonly size      = input<ProgressSize>('md');
  readonly showLabel = input(true);

  readonly clampedValue = computed(() => Math.min(100, Math.max(0, this.value())));
}
