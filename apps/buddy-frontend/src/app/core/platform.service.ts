import { Injectable, signal } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Injectable({ providedIn: 'root' })
export class PlatformService {
  readonly isNative = signal(Capacitor.isNativePlatform());
  readonly platform = signal(Capacitor.getPlatform()); // 'ios' | 'android' | 'web'
  readonly isIos = signal(Capacitor.getPlatform() === 'ios');
  readonly isAndroid = signal(Capacitor.getPlatform() === 'android');
}
