import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { TooltipPosition } from './tooltip.types';
import { TOOLTIP_POSITIONS } from './tooltip.types';

@Component({
  selector: 'k10-tooltip',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
})
export class TooltipComponent {
  readonly content  = input('');
  readonly disabled = input(false);
  readonly position = input<TooltipPosition>('top');

  readonly safePosition = computed<TooltipPosition>(() => {
    const p = this.position();
    return TOOLTIP_POSITIONS.includes(p) ? p : 'top';
  });
}
