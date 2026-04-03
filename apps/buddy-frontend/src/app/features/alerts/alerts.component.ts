import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EmptyStateComponent } from '@buddy/ui';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [EmptyStateComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
})
export class AlertsComponent {}
