import { Component, ChangeDetectionStrategy, ElementRef, OnDestroy, afterNextRender, input, signal, viewChild } from '@angular/core';

@Component({
  selector: 'k10-app-shell',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css'],
})
export class AppShellComponent implements OnDestroy {
  /**
   * Masque la bottom nav quand le clavier virtuel est ouvert (Capacitor).
   * Piloter depuis l'app avec @capacitor/keyboard — voir app-shell.types.ts.
   */
  readonly keyboardVisible = input(false);

  readonly topbarHidden = signal(false);

  private readonly _mainRef = viewChild<ElementRef<HTMLElement>>('mainRef');
  private _lastScrollY = 0;
  private _removeScrollListener?: () => void;

  constructor() {
    afterNextRender(() => {
      const main = this._mainRef()?.nativeElement;
      if (!main) return;

      const onScroll = () => {
        const y = main.scrollTop;
        this.topbarHidden.set(y > 60 && y > this._lastScrollY);
        this._lastScrollY = y;
      };

      main.addEventListener('scroll', onScroll, { passive: true });
      this._removeScrollListener = () => main.removeEventListener('scroll', onScroll);
    });
  }

  ngOnDestroy(): void {
    this._removeScrollListener?.();
  }
}
