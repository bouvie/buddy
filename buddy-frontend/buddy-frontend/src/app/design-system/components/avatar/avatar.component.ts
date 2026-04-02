import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { AvatarSize } from './avatar.types';
import { AVATAR_SIZES } from './avatar.types';

@Component({
  selector: 'app-avatar',
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

  readonly safeSize = computed<AvatarSize>(() => {
    const s = this.size();
    if (!AVATAR_SIZES.includes(s)) {
      console.warn(`[AvatarComponent] Invalid size: ${s}. Using 'md'.`);
      return 'md';
    }
    return s;
  });

  readonly hasImage = computed(() => !!this.src());
}
