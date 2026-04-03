import { Directive, inject } from '@angular/core';
import { MapComponent } from '@buddy/ui';

// Mock: 326 Boulevard du Redon, 13009 Marseille
const LOCATION = { lat: 43.245347, lng: 5.426638 };

@Directive({
  selector: 'k9-map[appMapLocation]',
  standalone: true,
})
export class MapLocationDirective {
  private readonly host = inject(MapComponent, { host: true });

  constructor() {
    this.host.center.set(LOCATION);
    this.host.zoom.set(17);
    this.host.markers.set([
      {
        lat:             LOCATION.lat,
        lng:             LOCATION.lng,
        title:           'Buddy',
        infoContent:     '326 Bd du Redon, 13009 Marseille',
      },
    ]);
  }
}
