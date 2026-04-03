import { Routes } from '@angular/router';
import { provideK9Charts } from '@buddy/ui';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    providers: [provideK9Charts()],
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'dogs',
    loadComponent: () =>
      import('./features/dogs/dogs.component').then((m) => m.DogsComponent),
  },
  {
    path: 'alerts',
    loadComponent: () =>
      import('./features/alerts/alerts.component').then(
        (m) => m.AlertsComponent
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then(
        (m) => m.ProfileComponent
      ),
  },
  { path: '**', redirectTo: 'dashboard' },
];
