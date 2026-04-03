import { Directive, Injector, Input, OnInit, effect, inject, runInInjectionContext } from '@angular/core';
import { toObservable, toSignal, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, map, startWith, take } from 'rxjs/operators';
import type { ChartCardData, ChartDataPoint } from '@buddy/ui';
import { ChartCardComponent } from '@buddy/ui';
import { DogService } from '@buddy/data-access';

/** Converts an ISO date string to a short French weekday label (e.g. "2024-04-01" → "Lun") */
function formatSleepDate(isoDate: string): string {
  const formatted = new Intl.DateTimeFormat('fr-FR', { weekday: 'short' }).format(new Date(isoDate));
  return formatted.charAt(0).toUpperCase() + formatted.slice(1).replace('.', '');
}

@Directive({
  selector: 'k9-chart-card[appSleepTimeChart]',
  standalone: true,
})
export class SleepTimeChartDirective implements OnInit {
  @Input({ required: true }) appSleepTimeChart!: string;

  private readonly host = inject(ChartCardComponent, { host: true });
  private readonly dogService = inject(DogService);
  private readonly injector = inject(Injector);

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      const dashboard = this.dogService.watchDashboard(this.appSleepTimeChart);

      const chartData$ = toObservable(dashboard).pipe(
        map((s) => s.data?.sleepSeries ?? null),
        filter((series): series is NonNullable<typeof series> => !!series?.length),
        take(1),
        map((series): ChartDataPoint[] =>
          series.map((p) => ({ label: formatSleepDate(p.date), value: p.hours })),
        ),
        map(
          (points): ChartCardData => ({
            variant: 'bar',
            title: 'Sleep Time',
            headerValue: String(points.at(-1)?.value ?? 0),
            unit: 'hours',
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
