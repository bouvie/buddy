import { Directive, Injector, Input, OnInit, effect, inject, runInInjectionContext } from '@angular/core';
import { toObservable, toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, map, scan, startWith, switchMap, take } from 'rxjs/operators';
import type { ChartCardData, ChartDataPoint } from '@buddy/ui';
import { ChartCardComponent } from '@buddy/ui';
import { DogService } from '@buddy/data-access';

const WINDOW_SIZE = 30;

const FIXED_LABELS: readonly string[] = Array.from({ length: WINDOW_SIZE }, (_, i) =>
  i === WINDOW_SIZE - 1 ? '0s' : `-${WINDOW_SIZE - 1 - i}s`,
);

@Directive({
  selector: 'k9-chart-card[appHeartRateChart]',
  standalone: true,
})
export class HeartRateChartDirective implements OnInit {
  @Input({ required: true }) appHeartRateChart!: string;

  private readonly host = inject(ChartCardComponent, { host: true });
  private readonly dogService = inject(DogService);
  private readonly injector = inject(Injector);

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      const dashboard = this.dogService.watchDashboard(this.appHeartRateChart);

      // Pre-fill: map heartRateSeries to FIXED_LABELS positions
      const initialPoints$ = toObservable(dashboard).pipe(
        map((s) => s.data?.heartRateSeries ?? null),
        filter((series): series is NonNullable<typeof series> => !!series?.length),
        take(1),
        map((series): ChartDataPoint[] =>
          series.map((p, i) => ({ label: FIXED_LABELS[i] as string, value: p.bpm })),
        ),
      );

      // Pre-fill → live sliding window
      const chartData$ = initialPoints$.pipe(
        switchMap((initial) =>
          this.dogService.heartRateLive$(this.appHeartRateChart).pipe(
            scan(
              (win, { bpm }): ChartDataPoint[] => [
                ...win.slice(1).map((p, i) => ({ label: FIXED_LABELS[i] as string, value: p.value })),
                { label: FIXED_LABELS[WINDOW_SIZE - 1] as string, value: bpm },
              ],
              initial,
            ),
            startWith(initial),
          ),
        ),
        map(
          (points): ChartCardData => ({
            variant: 'line-area',
            title: 'Rythme cardiaque',
            headerValue: String(points.at(-1)?.value ?? 0),
            unit: 'BPM',
            isLive: true,
            points,
          }),
        ),
        startWith<ChartCardData>({ variant: 'skeleton' }),
        takeUntilDestroyed(),
      );

      const chartData = toSignal(chartData$, { requireSync: true });
      effect(() => this.host.data.set(chartData()));
    });
  }
}
