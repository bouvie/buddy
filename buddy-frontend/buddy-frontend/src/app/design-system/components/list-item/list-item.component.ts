import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
  signal,
  computed,
  effect,
} from '@angular/core';
import type { ListItemVariant, ListItemData } from './list-item.types';
import { LIST_ITEM_VARIANTS } from './list-item.types';
import { ToggleComponent } from '../toggle/toggle.component';
import { ButtonComponent } from '../button/button.component';
import { SkeletonComponent } from '../skeleton/skeleton.component';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [ToggleComponent, ButtonComponent, SkeletonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent {
  readonly data = input<ListItemData | null>(null);

  readonly toggled = output<boolean>();
  readonly navigated = output<void>();
  readonly retried = output<void>();

  readonly safeVariant = computed<ListItemVariant>(() => {
    const v = this.data()?.variant ?? 'text-value';
    if (!LIST_ITEM_VARIANTS.includes(v)) {
      console.warn(`[ListItemComponent] Invalid variant: ${v}. Using 'text-value'.`);
      return 'text-value';
    }
    return v;
  });

  readonly icon = computed(() => this.data()?.icon ?? 'fa-solid fa-circle');
  readonly label = computed(() => this.data()?.label ?? '');
  readonly sublabel = computed(() => this.data()?.sublabel ?? '');
  readonly value = computed(() => this.data()?.value ?? '');

  /**
   * État du toggle : initialisé depuis data().checked,
   * puis géré localement pour refléter les interactions utilisateur.
   */
  readonly checked = signal(false);

  constructor() {
    effect(() => {
      const incoming = this.data()?.checked;
      if (incoming !== undefined) {
        this.checked.set(incoming);
      }
    });
  }

  onToggle(val: boolean): void {
    this.checked.set(val);
    this.toggled.emit(val);
  }
}
