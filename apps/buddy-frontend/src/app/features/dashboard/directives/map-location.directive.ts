import { Directive, Injector, Input, OnInit, inject, runInInjectionContext } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { MapComponent } from '@buddy/ui';
import { DogService } from '@buddy/data-access';

@Directive({
  selector: 'k9-map[appMapLocation]',
  standalone: true,
})
export class MapLocationDirective implements OnInit {
  @Input({ required: true }) appMapLocation!: string;

  private readonly host = inject(MapComponent, { host: true });
  private readonly dogService = inject(DogService);
  private readonly injector = inject(Injector);

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      const dashboard = this.dogService.watchDashboard(this.appMapLocation);

      const initialLocation$ = toObservable(dashboard).pipe(
        map((s) => s.data?.lastLocation ?? null),
        filter((loc): loc is NonNullable<typeof loc> => loc != null),
        take(1),
      );

      // Initial center & zoom from pre-fill query
      initialLocation$.pipe(takeUntilDestroyed()).subscribe((loc) => {
        this.host.center.set({ lat: loc.lat, lng: loc.lng });
        this.host.zoom.set(17);
      });

      // Marker: pre-fill + live updates merged
      merge(
        initialLocation$,
        this.dogService.locationLive$(this.appMapLocation),
      )
        .pipe(takeUntilDestroyed())
        .subscribe((loc) => {
          this.host.markers.set([
            {
              lat: loc.lat,
              lng: loc.lng,
              title: dashboard().data?.name ?? 'Buddy',
              infoContent: loc.address ?? '',
            },
          ]);
        });
    });
  }
}
