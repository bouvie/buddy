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

@Component({
  selector: 'k9-map',
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
  readonly isReady = signal(false);

  private readonly _infoWindow = viewChild(MapInfoWindow);
  private readonly _markerRefs = viewChildren(MapMarker);

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
    this._loader.load().then(() => this.isReady.set(true));
  }

  openInfo(marker: MapMarkerData, index: number): void {
    this.activeMarker.set(marker);
    const infoWindow = this._infoWindow();
    const markerRef = this._markerRefs()[index];
    if (infoWindow && markerRef) {
      infoWindow.open(markerRef);
    }
  }

  closeInfo(): void {
    this.activeMarker.set(null);
  }
}
