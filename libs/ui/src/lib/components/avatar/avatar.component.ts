import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { AvatarSize, AvatarColor } from './avatar.types';
import { AVATAR_SIZES, AVATAR_COLORS } from './avatar.types';

@Component({
  selector: 'k10-avatar',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent {
  readonly src      = input('');
  readonly alt      = input('');
  readonly initials = input('');
  readonly name     = input('');
  readonly subtitle = input('');
  readonly size     = input<AvatarSize>('md');
  readonly color    = input<AvatarColor>('primary');

  readonly safeSize = computed<AvatarSize>(() => {
    const s = this.size();
    if (!AVATAR_SIZES.includes(s)) {
      console.warn(`[AvatarComponent] Invalid size: ${s}. Using 'md'.`);
      return 'md';
    }
    return s;
  });

  readonly safeColor = computed<AvatarColor>(() => {
    const c = this.color();
    if (!AVATAR_COLORS.includes(c)) {
      console.warn(`[AvatarComponent] Invalid color: ${c}. Using 'primary'.`);
      return 'primary';
    }
    return c;
  });

  readonly hasImage = computed(() => !!this.src());
}
