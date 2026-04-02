import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChartCardComponent } from '@buddy/ui';
import { CardComponent } from '@buddy/ui';
import { MapComponent } from '@buddy/ui';
import { HeartRateChartDirective } from './directives/heart-rate-chart.directive';
import { SleepTimeChartDirective } from './directives/sleep-time-chart.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartCardComponent, CardComponent, MapComponent, HeartRateChartDirective, SleepTimeChartDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {}
