import { Directive, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import type { ChartCardData, ChartDataPoint } from '../../../design-system/components/chart-card/chart-card.types';
import { ChartCardComponent } from '../../../design-system/components/chart-card/chart-card.component';

/** Heures de sommeil par jour sur 7 jours — à remplacer par un appel HTTP */
const SLEEP_TIME_MOCK: ChartDataPoint[] = [
  { label: 'Lun', value: 7.2 },
  { label: 'Mar', value: 6.5 },
  { label: 'Mer', value: 8.1 },
  { label: 'Jeu', value: 5.8 },
  { label: 'Ven', value: 6.9 },
  { label: 'Sam', value: 9.0 },
  { label: 'Dim', value: 8.4 },
];

@Directive({
  selector: 'app-chart-card[appSleepTimeChart]',
  standalone: true,
})
export class SleepTimeChartDirective {
  private readonly host = inject(ChartCardComponent, { host: true });

  private readonly chartData = toSignal(
    of(SLEEP_TIME_MOCK).pipe(
      delay(1000),
      map((points): ChartCardData => ({
        variant:     'bar',
        title:       'Sleep Time',
        headerValue: '8.4',
        unit:        'hours',
        points,
      })),
      startWith<ChartCardData>({ variant: 'skeleton' }),
    ),
    { requireSync: true },
  );

  constructor() {
    effect(() => this.host.data.set(this.chartData()));
  }
}
