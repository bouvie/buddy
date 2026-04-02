import { Directive, HostBinding, OnInit, OnDestroy, inject } from '@angular/core';
import { of, Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import type {
  ChartCardData,
  ChartDataPoint,
} from '../../../design-system/components/organic/chart-card/chart-card.types';
import { ChartCardComponent } from '../../../design-system';

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
export class SleepTimeChartDirective implements OnInit, OnDestroy {
  private readonly host = inject(ChartCardComponent, { host: true });

  private _sub: Subscription | null = null;

  ngOnInit(): void {
    this._sub = of(SLEEP_TIME_MOCK)
      .pipe(
        delay(1000),
        tap((points) => {
          this.host.data.set({
            variant: 'bar',
            title: 'Sleep Time',
            headerValue: '8.4',
            unit: 'hours',
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
