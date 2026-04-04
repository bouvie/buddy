import {
  Component,
  ChangeDetectionStrategy,
  input,
  model,
  signal,
  computed,
  inject,
  viewChildren,
  viewChild,
  OnInit,
} from '@angular/core';
import { GoogleMap, MapMarker, MapInfoWindow } from '@angular/google-maps';

import { MapCenter, MapMarkerData } from './map.types';
import { MAP_DARK_STYLE } from './map-dark-style';
import { MapLoaderService } from './map-loader.service';
import { k10CssVar } from '../../utils';

interface MapPinTokens {
  primary:       string;
  surfaceRaised: string;
  border:        string;
}

function buildK9PinIcon(tokens: MapPinTokens, uid: string): google.maps.Icon {
  const { primary, surfaceRaised, border } = tokens;
  const clipId = `k10-pin-clip-${uid}`;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="62" viewBox="0 0 52 62">
    <defs>
      <clipPath id="${clipId}">
        <circle cx="26" cy="24" r="13"/>
      </clipPath>
    </defs>
    <path d="M26 62C26 62 4 43 4 24A22 22 0 1 1 48 24C48 43 26 62 26 62Z" fill="${primary}"/>
    <circle cx="26" cy="24" r="13" fill="${surfaceRaised}"/>
    <circle cx="26" cy="24" r="13" fill="none" stroke="${border}" stroke-width="1"/>
  </svg>`;

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new google.maps.Size(52, 62),
    anchor:     new google.maps.Point(26, 62),
  };
}

@Component({
  selector: 'k10-map',
  standalone: true,
  imports: [GoogleMap, MapMarker, MapInfoWindow],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  private readonly _loader = inject(MapLoaderService);

  readonly center  = model<MapCenter>({ lat: 48.8566, lng: 2.3522 });
  readonly zoom    = model<number>(12);
  readonly markers = model<MapMarkerData[]>([]);
  readonly height  = input<string>('400px');

  readonly activeMarker = signal<MapMarkerData | null>(null);
  readonly isReady      = signal(false);
  readonly pinIcon      = signal<google.maps.Icon | undefined>(undefined);

  private readonly _infoWindow  = viewChild(MapInfoWindow);
  private readonly _markerRefs  = viewChildren(MapMarker);

  readonly mapOptions = computed<google.maps.MapOptions>(() => ({
    center: this.center(),
    zoom: this.zoom(),
    styles: MAP_DARK_STYLE,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    disableDefaultUI: true,
  }));

  ngOnInit(): void {
    this._loader.load().then(() => {
      this.isReady.set(true);
      this.pinIcon.set(buildK9PinIcon(
        {
          primary:       k10CssVar('--k10-color-primary'),
          surfaceRaised: k10CssVar('--k10-color-surface-raised'),
          border:        k10CssVar('--k10-color-border'),
        },
        'static',
      ));
    });
  }

  openInfo(marker: MapMarkerData, index: number): void {
    this.activeMarker.set(marker);
    const infoWindow = this._infoWindow();
    const markerRef  = this._markerRefs()[index];
    if (infoWindow && markerRef) {
      infoWindow.open(markerRef);
    }
  }

  closeInfo(): void {
    this._infoWindow()?.close();
    this.activeMarker.set(null);
  }
}
