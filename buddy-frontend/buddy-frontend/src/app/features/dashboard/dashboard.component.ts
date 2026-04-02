import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChartCardComponent } from '../../design-system/components/chart-card/chart-card.component';
import { HeartRateChartDirective } from './directives/heart-rate-chart.directive';
import { SleepTimeChartDirective } from './directives/sleep-time-chart.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartCardComponent, HeartRateChartDirective, SleepTimeChartDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {}
