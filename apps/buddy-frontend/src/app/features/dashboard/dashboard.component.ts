import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ChartCardComponent,
  CardComponent,
  MapComponent,
  ListItemComponent,
  ModalComponent,
  FormFieldComponent,
  InputComponent,
  ButtonComponent,
} from '@buddy/ui';
import { DogService } from '@buddy/graphql-client';
import { HeartRateChartDirective } from './directives/heart-rate-chart.directive';
import { SleepTimeChartDirective } from './directives/sleep-time-chart.directive';
import { MapLocationDirective } from './directives/map-location.directive';
import { ActivityReportDirective } from './directives/activity-report.directive';
import { EditActivityDirective } from './directives/edit-activity.directive';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    ChartCardComponent,
    CardComponent,
    MapComponent,
    ListItemComponent,
    ModalComponent,
    FormFieldComponent,
    InputComponent,
    ButtonComponent,
    HeartRateChartDirective,
    SleepTimeChartDirective,
    MapLocationDirective,
    ActivityReportDirective,
    EditActivityDirective,
  ],
  providers: [DogService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  dogId = '1';
}
