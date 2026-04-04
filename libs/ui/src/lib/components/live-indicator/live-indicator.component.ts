import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { LiveIndicatorVariant, LiveIndicatorSize, LiveIndicatorMode } from './live-indicator.types';
import { LIVE_INDICATOR_VARIANTS, LIVE_INDICATOR_SIZES, LIVE_INDICATOR_MODES } from './live-indicator.types';

@Component({
  selector: 'k10-live-indicator',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './live-indicator.component.html',
  styleUrls: ['./live-indicator.component.css'],
})
export class LiveIndicatorComponent {
  readonly variant = input<LiveIndicatorVariant>('accent');
  readonly size    = input<LiveIndicatorSize>('md');
  readonly mode    = input<LiveIndicatorMode>('pill');
  readonly label   = input('LIVE');
  readonly pulse   = input(true);

  readonly safeVariant = computed<LiveIndicatorVariant>(() => {
    const v = this.variant();
    return LIVE_INDICATOR_VARIANTS.includes(v) ? v : 'accent';
  });

  readonly safeSize = computed<LiveIndicatorSize>(() => {
    const s = this.size();
    return LIVE_INDICATOR_SIZES.includes(s) ? s : 'md';
  });

  readonly safeMode = computed<LiveIndicatorMode>(() => {
    const m = this.mode();
    return LIVE_INDICATOR_MODES.includes(m) ? m : 'pill';
  });
}
