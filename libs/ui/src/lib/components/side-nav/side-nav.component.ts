import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';
import type { NavItemConfig } from '../nav-item/nav-item.types';

@Component({
  selector: 'k9-side-nav',
  standalone: true,
  imports: [NavItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent {
  readonly items = input.required<NavItemConfig[]>();
}
