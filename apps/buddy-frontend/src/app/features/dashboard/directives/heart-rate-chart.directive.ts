import { Directive, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { delay, map, startWith } from 'rxjs/operators';
import type { ChartCardData, ChartDataPoint } from '@buddy/ui';
import { ChartCardComponent } from '@buddy/ui';

/** BPM moyens par heure sur 24h — à remplacer par un appel HTTP */
const HEART_RATE_MOCK: ChartDataPoint[] = [
  { label: '00h', value: 58 },
  { label: '01h', value: 55 },
  { label: '02h', value: 53 },
  { label: '03h', value: 52 },
  { label: '04h', value: 54 },
  { label: '05h', value: 57 },
  { label: '06h', value: 63 },
  { label: '07h', value: 72 },
  { label: '08h', value: 78 },
  { label: '09h', value: 82 },
  { label: '10h', value: 85 },
  { label: '11h', value: 88 },
  { label: '12h', value: 91 },
  { label: '13h', value: 87 },
  { label: '14h', value: 84 },
  { label: '15h', value: 89 },
  { label: '16h', value: 93 },
  { label: '17h', value: 96 },
  { label: '18h', value: 90 },
  { label: '19h', value: 83 },
  { label: '20h', value: 76 },
  { label: '21h', value: 70 },
  { label: '22h', value: 65 },
  { label: '23h', value: 60 },
];

@Directive({
  selector: 'k9-chart-card[appHeartRateChart]',
  standalone: true,
})
export class HeartRateChartDirective {
  private readonly host = inject(ChartCardComponent, { host: true });

  private readonly chartData = toSignal(
    of(HEART_RATE_MOCK).pipe(
      delay(800),
      map((points): ChartCardData => ({
        variant:     'line-area',
        title:       'Heart Rate',
        headerValue: '72',
        unit:        'BPM',
        isLive:      true,
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
