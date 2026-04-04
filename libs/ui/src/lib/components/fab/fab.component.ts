import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import type { FabVariant, FabSize } from './fab.types';
import { FAB_VARIANTS, FAB_SIZES } from './fab.types';

@Component({
  selector: 'k10-fab',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.css'],
})
export class FabComponent {
  readonly variant  = input<FabVariant>('primary');
  readonly size     = input<FabSize>('md');
  readonly icon     = input('fa-solid fa-plus');
  readonly label    = input('');
  readonly disabled = input(false);

  readonly clicked = output<void>();

  readonly safeVariant = computed<FabVariant>(() => {
    const v = this.variant();
    return FAB_VARIANTS.includes(v) ? v : 'primary';
  });

  readonly safeSize = computed<FabSize>(() => {
    const s = this.size();
    return FAB_SIZES.includes(s) ? s : 'md';
  });

  readonly isExtended = computed(() => !!this.label());
}
