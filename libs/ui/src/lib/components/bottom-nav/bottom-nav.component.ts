import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import type { NavItemConfig } from '../nav-item/nav-item.types';

@Component({
  selector: 'k9-bottom-nav',
  standalone: true,
  imports: [NavItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css'],
})
export class BottomNavComponent {
  readonly items = input.required<NavItemConfig[]>();
}
