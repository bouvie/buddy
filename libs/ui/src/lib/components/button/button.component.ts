import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import type { ButtonVariant, ButtonSize, ButtonType } from './button.types';
import { BUTTON_VARIANTS, BUTTON_SIZES } from './button.types';

@Component({
  selector: 'k9-button',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size     = input<ButtonSize>('md');
  readonly disabled   = input(false);
  readonly fullWidth   = input(false);
  readonly isLoading   = input(false);
  readonly type     = input<ButtonType>('button');

  readonly clicked = output<void>();

  readonly safeVariant = computed<ButtonVariant>(() => {
    const v = this.variant();
    if (!BUTTON_VARIANTS.includes(v)) {
      console.warn(`[ButtonComponent] Invalid variant: ${v}. Using 'primary'.`);
      return 'primary';
    }
    return v;
  });

  readonly safeSize = computed<ButtonSize>(() => {
    const s = this.size();
    if (!BUTTON_SIZES.includes(s)) {
      console.warn(`[ButtonComponent] Invalid size: ${s}. Using 'md'.`);
      return 'md';
    }
    return s;
  });
}
