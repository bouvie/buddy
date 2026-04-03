import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ChartCardComponent, CardComponent, MapComponent } from '@buddy/ui';
import { DogService } from '@buddy/data-access';
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
  providers: [DogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  @Input({ required: true }) dogId = '1';
}
