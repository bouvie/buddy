import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import type { EmptyStateSize } from './empty-state.types';
import { EMPTY_STATE_SIZES } from './empty-state.types';

@Component({
  selector: 'k9-empty-state',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.css'],
})
export class EmptyStateComponent {
  readonly title       = input('');
  readonly description = input('');
  readonly actionLabel = input('');
  readonly size        = input<EmptyStateSize>('md');

  readonly safeSize = computed<EmptyStateSize>(() => {
    const s = this.size();
    if (!EMPTY_STATE_SIZES.includes(s)) {
      console.warn(`[EmptyStateComponent] Invalid size: ${s}. Using 'md'.`);
      return 'md';
    }
    return s;
  });

  readonly actionClicked = output<void>();
}
