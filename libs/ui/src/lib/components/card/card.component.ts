import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import type { CardPadding, CardElevation } from './card.types';

@Component({
  selector: 'k9-card',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  readonly title       = input('');
  readonly footer      = input(false);
  readonly padding     = input<CardPadding>('md');
  readonly elevation   = input<CardElevation>('md');
  readonly border      = input(true);
  readonly interactive = input(false);
  readonly isLive      = input(false);
}
