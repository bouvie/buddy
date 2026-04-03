import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChartCardComponent, CardComponent, MapComponent } from '@buddy/ui';
import { HeartRateChartDirective } from './directives/heart-rate-chart.directive';
import { SleepTimeChartDirective } from './directives/sleep-time-chart.directive';
import { MapLocationDirective } from './directives/map-location.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartCardComponent,
    CardComponent,
    MapComponent,
    HeartRateChartDirective,
    SleepTimeChartDirective,
    MapLocationDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {}
