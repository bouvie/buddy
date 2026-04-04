import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';
import type { Tab, TabsVariant } from './tabs.types';
import { TABS_VARIANTS } from './tabs.types';

@Component({
  selector: 'k10-tabs',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  readonly tabs      = input<Tab[]>([]);
  readonly activeTab = input('');
  readonly variant   = input<TabsVariant>('primary');

  readonly tabChange = output<string>();

  readonly safeVariant = computed<TabsVariant>(() => {
    const v = this.variant();
    return TABS_VARIANTS.includes(v) ? v : 'primary';
  });

  selectTab(tab: Tab): void {
    if (!tab.disabled) this.tabChange.emit(tab.value);
  }
}
