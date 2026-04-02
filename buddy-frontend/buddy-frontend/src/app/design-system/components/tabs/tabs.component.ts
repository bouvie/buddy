import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import type { Tab } from './tabs.types';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  readonly tabs      = input<Tab[]>([]);
  readonly activeTab = input('');

  readonly tabChange = output<string>();

  selectTab(tab: Tab): void {
    if (!tab.disabled) this.tabChange.emit(tab.value);
  }
}
