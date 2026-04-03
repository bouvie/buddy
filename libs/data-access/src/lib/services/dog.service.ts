import { Injectable, Signal, inject } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { gql } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BaseQueryService, QueryState } from './base-query.service';
import type {
  DashboardDataQuery,
  DashboardDataQueryVariables,
  HeartRateLiveSubscription,
  HeartRateLiveSubscriptionVariables,
  MapLocationLiveSubscription,
  MapLocationLiveSubscriptionVariables,
} from '../../generated/graphql';

const DASHBOARD_DATA_QUERY = gql`
  fragment MapLocation_Dog on Dog {
    id
    name
    lastLocation {
      lat
      lng
      address
      timestamp
    }
  }
  fragment HeartRateSeries_Dog on Dog {
    id
    heartRateSeries(last: 30) {
      timestamp
      bpm
    }
  }
  fragment SleepSeries_Dog on Dog {
    id
    sleepSeries(last: 7) {
      date
      hours
    }
  }
  fragment Dashboard_Dog on Dog {
    id
    ...MapLocation_Dog
    ...HeartRateSeries_Dog
    ...SleepSeries_Dog
  }
  query DashboardData($dogId: ID!) {
    dog(id: $dogId) {
      ...Dashboard_Dog
    }
  }
`;

const HEART_RATE_LIVE_SUBSCRIPTION = gql`
  subscription HeartRateLive($dogId: ID!) {
    heartRate(dogId: $dogId) {
      timestamp
      bpm
    }
  }
`;

const MAP_LOCATION_LIVE_SUBSCRIPTION = gql`
  subscription MapLocationLive($dogId: ID!) {
    location(dogId: $dogId) {
      lat
      lng
      address
      timestamp
    }
  }
`;

@Injectable()
export class DogService extends BaseQueryService {
  private readonly apollo = inject(Apollo);

  watchDashboard(dogId: string): Signal<QueryState<DashboardDataQuery['dog']>> {
    return this.queryToSignal(
      this.apollo
        .watchQuery<DashboardDataQuery, DashboardDataQueryVariables>({
          query: DASHBOARD_DATA_QUERY,
          variables: { dogId },
        })
        .valueChanges.pipe(map((r) => (r.data as DashboardDataQuery)?.dog ?? null)),
    );
  }

  heartRateLive$(dogId: string): Observable<HeartRateLiveSubscription['heartRate']> {
    return this.apollo
      .subscribe<HeartRateLiveSubscription, HeartRateLiveSubscriptionVariables>({
        query: HEART_RATE_LIVE_SUBSCRIPTION,
        variables: { dogId },
      })
      .pipe(
        map((r) => r.data?.heartRate),
        filter((v): v is HeartRateLiveSubscription['heartRate'] => v != null),
      );
  }

  locationLive$(dogId: string): Observable<MapLocationLiveSubscription['location']> {
    return this.apollo
      .subscribe<MapLocationLiveSubscription, MapLocationLiveSubscriptionVariables>({
        query: MAP_LOCATION_LIVE_SUBSCRIPTION,
        variables: { dogId },
      })
      .pipe(
        map((r) => r.data?.location),
        filter((v): v is MapLocationLiveSubscription['location'] => v != null),
      );
  }
}
