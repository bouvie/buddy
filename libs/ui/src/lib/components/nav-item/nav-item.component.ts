import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import type { NavItemVariant, NavItemConfig } from './nav-item.types';
import { NAV_ITEM_VARIANTS } from './nav-item.types';

@Component({
  selector: 'k9-nav-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
})
export class NavItemComponent {
  readonly item    = input.required<NavItemConfig>();
  readonly variant = input<NavItemVariant>('bottom');

  readonly safeVariant = computed<NavItemVariant>(() => {
    const v = this.variant();
    if (!NAV_ITEM_VARIANTS.includes(v)) {
      console.warn(`[NavItemComponent] Invalid variant: ${v}. Using 'bottom'.`);
      return 'bottom';
    }
    return v;
  });

  readonly hasBadge = computed(() => {
    const b = this.item().badge;
    return b !== undefined && b > 0;
  });

  readonly badgeLabel = computed(() => {
    const b = this.item().badge ?? 0;
    return b > 99 ? '99+' : String(b);
  });
}
