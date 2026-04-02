import { Directive, HostBinding, OnInit, OnDestroy, inject } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import type {
  ChartCardData,
  ChartDataPoint,
} from '../../../design-system/components/chart-card/chart-card.types';
import { ChartCardComponent } from '../../../design-system';

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
  selector: 'app-chart-card[appHeartRateChart]',
  standalone: true,
})
export class HeartRateChartDirective implements OnInit, OnDestroy {
  private readonly host = inject(ChartCardComponent, { host: true });

  private _sub: Subscription | null = null;

  ngOnInit(): void {
    this._sub = of(HEART_RATE_MOCK)
      .pipe(
        delay(1000),
        tap((points) => {
          this.host.data.set({
            variant: 'line-area',
            title: 'Heart Rate',
            headerValue: '72',
            unit: 'BPM',
            isLive: true,
            points,
          });
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._sub?.unsubscribe();
  }
}
