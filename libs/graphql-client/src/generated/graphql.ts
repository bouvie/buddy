export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Dog = {
  __typename?: 'Dog';
  heartRateSeries: Array<HeartRatePoint>;
  id: Scalars['ID']['output'];
  lastLocation?: Maybe<LocationPoint>;
  name: Scalars['String']['output'];
  sleepSeries: Array<SleepPoint>;
};


export type DogHeartRateSeriesArgs = {
  last?: Scalars['Int']['input'];
};


export type DogSleepSeriesArgs = {
  last?: Scalars['Int']['input'];
};

export type HeartRatePoint = {
  __typename?: 'HeartRatePoint';
  bpm: Scalars['Int']['output'];
  timestamp: Scalars['String']['output'];
};

export type LocationPoint = {
  __typename?: 'LocationPoint';
  address?: Maybe<Scalars['String']['output']>;
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  timestamp: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  dog?: Maybe<Dog>;
};


export type QueryDogArgs = {
  id: Scalars['ID']['input'];
};

export type SleepPoint = {
  __typename?: 'SleepPoint';
  date: Scalars['String']['output'];
  hours: Scalars['Float']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  heartRate: HeartRatePoint;
  location: LocationPoint;
};


export type SubscriptionHeartRateArgs = {
  dogId: Scalars['ID']['input'];
};


export type SubscriptionLocationArgs = {
  dogId: Scalars['ID']['input'];
};

export type Dashboard_DogFragment = { __typename?: 'Dog', id: string, name: string, lastLocation?: { __typename?: 'LocationPoint', lat: number, lng: number, address?: string | null, timestamp: string } | null, heartRateSeries: Array<{ __typename?: 'HeartRatePoint', timestamp: string, bpm: number }>, sleepSeries: Array<{ __typename?: 'SleepPoint', date: string, hours: number }> };

export type DashboardDataQueryVariables = Exact<{
  dogId: Scalars['ID']['input'];
}>;


export type DashboardDataQuery = { __typename?: 'Query', dog?: { __typename?: 'Dog', id: string, name: string, lastLocation?: { __typename?: 'LocationPoint', lat: number, lng: number, address?: string | null, timestamp: string } | null, heartRateSeries: Array<{ __typename?: 'HeartRatePoint', timestamp: string, bpm: number }>, sleepSeries: Array<{ __typename?: 'SleepPoint', date: string, hours: number }> } | null };

export type HeartRateSeries_DogFragment = { __typename?: 'Dog', id: string, heartRateSeries: Array<{ __typename?: 'HeartRatePoint', timestamp: string, bpm: number }> };

export type HeartRateLiveSubscriptionVariables = Exact<{
  dogId: Scalars['ID']['input'];
}>;


export type HeartRateLiveSubscription = { __typename?: 'Subscription', heartRate: { __typename?: 'HeartRatePoint', timestamp: string, bpm: number } };

export type MapLocation_DogFragment = { __typename?: 'Dog', id: string, name: string, lastLocation?: { __typename?: 'LocationPoint', lat: number, lng: number, address?: string | null, timestamp: string } | null };

export type MapLocationLiveSubscriptionVariables = Exact<{
  dogId: Scalars['ID']['input'];
}>;


export type MapLocationLiveSubscription = { __typename?: 'Subscription', location: { __typename?: 'LocationPoint', lat: number, lng: number, address?: string | null, timestamp: string } };

export type SleepSeries_DogFragment = { __typename?: 'Dog', id: string, sleepSeries: Array<{ __typename?: 'SleepPoint', date: string, hours: number }> };
