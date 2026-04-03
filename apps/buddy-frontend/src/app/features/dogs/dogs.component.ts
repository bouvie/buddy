import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EmptyStateComponent } from '@buddy/ui';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [EmptyStateComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
})
export class DogsComponent {}
