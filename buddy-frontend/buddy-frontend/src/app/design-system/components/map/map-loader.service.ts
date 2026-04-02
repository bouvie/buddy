import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { GOOGLE_MAPS_API_KEY } from './map.types';

@Injectable({ providedIn: 'root' })
export class MapLoaderService {
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _apiKey = inject(GOOGLE_MAPS_API_KEY, { optional: true }) ?? '';
  private _loaded = false;
  private _promise: Promise<void> | null = null;

  load(): Promise<void> {
    if (!isPlatformBrowser(this._platformId)) {
      return Promise.resolve();
    }
    if (this._loaded) {
      return Promise.resolve();
    }
    if (this._promise) {
      return this._promise;
    }

    this._promise = new Promise<void>((resolve, reject) => {
      if ((window as any).google?.maps) {
        this._loaded = true;
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this._apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this._loaded = true;
        resolve();
      };
      script.onerror = () => reject(new Error('[k9-map] Failed to load Google Maps script'));
      document.head.appendChild(script);
    });

    return this._promise;
  }
}
