import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { MetricCardVariant, MetricTrendDirection, MetricCardData } from './metric-card.types';
import { METRIC_CARD_VARIANTS } from './metric-card.types';
import { SkeletonComponent } from '../../skeleton/skeleton.component';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  imports: [SkeletonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.css'],
})
export class MetricCardComponent {
  readonly data = input<MetricCardData | null>(null);

  readonly safeVariant = computed<MetricCardVariant>(() => {
    const v = this.data()?.variant ?? 'loading';
    if (!METRIC_CARD_VARIANTS.includes(v)) {
      console.warn(`[MetricCardComponent] Invalid variant: ${v}. Using 'loading'.`);
      return 'loading';
    }
    return v;
  });

  readonly label        = computed(() => this.data()?.label        ?? '');
  readonly value        = computed(() => this.data()?.value        ?? '');
  readonly unit         = computed(() => this.data()?.unit         ?? '');
  readonly trend        = computed(() => this.data()?.trend        ?? 0);
  readonly emptyMessage = computed(() => this.data()?.emptyMessage ?? 'No data available');
  readonly emptyIcon    = computed(() => this.data()?.emptyIcon    ?? 'fa-solid fa-circle-exclamation');

  readonly clampedProgress = computed(() =>
    Math.min(100, Math.max(0, this.data()?.progress ?? 0))
  );

  readonly trendDirection = computed<MetricTrendDirection>(() =>
    this.trend() >= 0 ? 'up' : 'down'
  );

  readonly trendLabel = computed(() => {
    const t = this.trend();
    return `${t > 0 ? '+' : ''}${t}%`;
  });
}
