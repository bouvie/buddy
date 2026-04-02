import { Component, ChangeDetectionStrategy, input, output, model } from '@angular/core';
import type { AlertVariant } from './alert.types';

@Component({
  selector: 'k9-alert',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  readonly variant     = input<AlertVariant>('info');
  readonly title       = input('');
  readonly description = input('');
  readonly dismissible = input(false);

  /** Two-way bindable : [(visible)]="show" */
  readonly visible = model(true);

  readonly closed = output<void>();

  onDismiss(): void {
    this.visible.set(false);
    this.closed.emit();
  }
}
