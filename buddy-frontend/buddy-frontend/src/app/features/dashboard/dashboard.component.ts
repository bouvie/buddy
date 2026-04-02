import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChartCardComponent } from '../../design-system/components/chart-card/chart-card.component';
import { CardComponent } from '../../design-system/components/card/card.component';
import { MapComponent } from '../../design-system/components/map/map.component';
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
