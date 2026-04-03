import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'k9-app-shell',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css'],
})
export class AppShellComponent {
  /**
   * Masque la bottom nav quand le clavier virtuel est ouvert (Capacitor).
   * Piloter depuis l'app avec @capacitor/keyboard — voir app-shell.types.ts.
   */
  readonly keyboardVisible = input(false);
}
