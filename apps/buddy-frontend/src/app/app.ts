import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AppShellComponent,
  TopbarComponent,
  BottomNavComponent,
  SideNavComponent,
} from '@buddy/ui';
import type { NavItemConfig } from '@buddy/ui';

const ICON_HOME    = 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z';
const ICON_DOGS    = 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18';
const ICON_ALERTS  = 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9';
const ICON_PROFILE = 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppShellComponent, TopbarComponent, BottomNavComponent, SideNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly navItems: NavItemConfig[] = [
    { label: 'Accueil',  route: '/dashboard', icon: ICON_HOME },
    { label: 'Chiens',   route: '/dogs',      icon: ICON_DOGS },
    { label: 'Alertes',  route: '/alerts',    icon: ICON_ALERTS },
    { label: 'Profil',   route: '/profile',   icon: ICON_PROFILE },
  ];
}
