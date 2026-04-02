import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import type { SpinnerSize, SpinnerVariant } from './spinner.types';

@Component({
  selector: 'k9-spinner',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {
  readonly size    = input<SpinnerSize>('md');
  readonly variant = input<SpinnerVariant>('primary');
  readonly label   = input('');
}
