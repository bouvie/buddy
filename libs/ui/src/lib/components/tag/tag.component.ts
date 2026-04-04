import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import type { TagVariant, TagSize } from './tag.types';
import { TAG_VARIANTS, TAG_SIZES } from './tag.types';

@Component({
  selector: 'k10-tag',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent {
  readonly variant   = input<TagVariant>('default');
  readonly size      = input<TagSize>('md');
  readonly removable = input(false);
  readonly label     = input('');

  readonly removed = output<void>();

  readonly safeVariant = computed<TagVariant>(() => {
    const v = this.variant();
    return TAG_VARIANTS.includes(v) ? v : 'default';
  });

  readonly safeSize = computed<TagSize>(() => {
    const s = this.size();
    return TAG_SIZES.includes(s) ? s : 'md';
  });
}
