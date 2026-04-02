import { InjectionToken } from '@angular/core';

export const GOOGLE_MAPS_API_KEY = new InjectionToken<string>('GOOGLE_MAPS_API_KEY');

export interface MapMarkerData {
  lat: number;
  lng: number;
  title?: string;
  infoContent?: string;
}

export interface MapCenter {
  lat: number;
  lng: number;
}
