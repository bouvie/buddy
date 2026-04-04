import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { CardVariant, CardPadding } from './card.types';
import { CARD_VARIANTS } from './card.types';

@Component({
  selector: 'k10-card',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  readonly variant     = input<CardVariant>('default');
  readonly padding     = input<CardPadding>('md');
  readonly title       = input('');
  readonly footer      = input(false);
  readonly interactive = input(false);
  readonly isLive      = input(false);

  readonly safeVariant = computed<CardVariant>(() => {
    const v = this.variant();
    if (!CARD_VARIANTS.includes(v)) {
      console.warn(`[CardComponent] Invalid variant: ${v}. Using 'default'.`);
      return 'default';
    }
    return v;
  });
}
