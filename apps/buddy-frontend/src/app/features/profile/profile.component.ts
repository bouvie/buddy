import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EmptyStateComponent } from '@buddy/ui';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [EmptyStateComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {}
