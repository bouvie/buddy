# Apollo & Data-Access

> Snapshot — avril 2026. Source de vérité : `libs/data-access/src/`

---

## Structure de libs/data-access

```
libs/data-access/src/
├─ index.ts                         Barrel export public
├─ lib/
│  ├─ graphql/
│  │  ├─ apollo.config.ts           Factory ApolloClient (HTTP + WebSocket split)
│  │  ├─ cache.config.ts            InMemoryCache + typePolicies
│  │  └─ ws-link.config.ts          GraphQL WebSocket (graphql-ws, retry × 5)
│  └─ services/
│     ├─ base-query.service.ts      Observable → Signal wrapper avec cleanup auto
│     └─ dog.service.ts             Queries + subscriptions domaine Dog
└─ generated/
   └─ graphql.ts                    Types TS générés par codegen (ne pas éditer)
```

**Exports publics** :
```typescript
export { createApolloOptions }
export { BaseQueryService, type QueryState }
export { DogService }
```

---

## apollo.config.ts — Décisions actées

```typescript
export function createApolloOptions(httpUrl: string, wsUrl: string) {
  return {
    link: split(
      ({ query }) => /* est une subscription */,
      createWsLink(wsUrl),           // subscriptions → WebSocket
      httpLink.create({ uri: httpUrl }) // queries/mutations → HTTP
    ),
    cache: createApolloCache(),
    defaultOptions: {
      watchQuery: { fetchPolicy: 'cache-and-network' }, // offline-first Capacitor
      query:      { fetchPolicy: 'network-only' },
    },
  };
}
```

**Décisions importantes :**
- `fetchPolicy: 'cache-and-network'` par défaut sur `watchQuery` → offline-first pour Capacitor
- Apollo cache = **seule source de vérité** → jamais de `signal.set()` après une mutation
- Optimistic UI → `optimisticResponse` Apollo, pas de mise à jour Signal manuelle

---

## cache.config.ts — typePolicies

```typescript
new InMemoryCache({
  typePolicies: {
    Dog:            { keyFields: ['id'] },    // entité principale — normalisée
    SleepPoint:     { keyFields: ['date'] },  // clé naturelle ISO date
    LocationPoint:  { keyFields: false },     // éphémère — jamais normalisée
    HeartRatePoint: { keyFields: false },     // éphémère — jamais normalisée
  }
})
```

**Règle `keyFields: false`** : sur tous les types live éphémères (GPS, BPM). Ces types changent à haute fréquence et vivent uniquement dans le contexte de leur parent normalisé — pas de stale data possible.

---

## ws-link.config.ts

```typescript
createClient({
  url: wsUrl,
  retryAttempts: 5,
  shouldRetry: () => true,
  // TODO: connectionParams avec auth token
})
```

---

## BaseQueryService

```typescript
@Injectable()
export abstract class BaseQueryService {
  // Observable → Signal<QueryState<T>> avec loading/error/data
  protected queryToSignal<T>(source$: Observable<T>): Signal<QueryState<T>>
  // Variante pour observables one-shot (queries sans watchQuery)
  protected queryToSignalSimple<T>(source$: Observable<T>): Signal<QueryState<T>>
}

interface QueryState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}
```

**Règles** :
- Toujours `takeUntilDestroyed()` — jamais de fuite mémoire
- `requireSync: true` safe car `startWith` garantit l'émission synchrone
- Ne jamais appeler `apollo.subscribe()` directement dans une directive — passer par un service

---

## DogService — API publique

```typescript
@Injectable()  // pas providedIn: 'root' — fourni par le feature component
export class DogService extends BaseQueryService {
  // Pre-fill : Signal mis à jour à chaque retour du cache/réseau
  watchDashboard(dogId: string): Signal<QueryState<Dog>>

  // Live deltas : Observable brut — takeUntilDestroyed() chez le caller (directive)
  heartRateLive$(dogId: string): Observable<HeartRatePoint>
  locationLive$(dogId: string): Observable<LocationPoint>
}
```

**Règle `DeepPartialObject`** : Apollo type `valueChanges.data` en `DeepPartialObject<T>`. Caster avec `r.data as MyQuery` pour retrouver les types générés.

**Règle scoping** : `DogService` est fourni par le feature component (`providers: [DogService]`), pas `providedIn: 'root'`. Le `DestroyRef` = durée de vie du composant → subscriptions fermées automatiquement.

---

## Fragments GraphQL — Dashboard (état actuel)

Structure co-localisée dans `apps/buddy-frontend/src/app/features/dashboard/` :

```
dashboard.graphql                     ← query de composition
directives/
  heart-rate-chart.graphql            ← HeartRateSeries_Dog + HeartRateLive subscription
  map-location.graphql                ← MapLocation_Dog + MapLocationLive subscription
  sleep-time-chart.graphql            ← SleepSeries_Dog (query statique, pas de subscription)
  activity-report.graphql             ← commenté — schema non encore défini
```

**dashboard.graphql** :
```graphql
#import "./directives/map-location.graphql"
#import "./directives/heart-rate-chart.graphql"
#import "./directives/sleep-time-chart.graphql"

fragment Dashboard_Dog on Dog {
  id
  ...MapLocation_Dog
  ...HeartRateSeries_Dog
  ...SleepSeries_Dog
}

query DashboardData($dogId: ID!) {
  dog(id: $dogId) { ...Dashboard_Dog }
}
```

**Règles de co-location** :
- Un fragment = une directive propriétaire — jamais importé depuis une autre directive
- Le feature component compose les fragments enfants via `#import`
- Duplication de champs scalaires (`id`, `name`) entre directives = intentionnelle — Apollo fusionne

---

## Pattern live : query initiale + subscription

```
1. DashboardData query → pre-fill (lastLocation, heartRateSeries last:30)
2. HeartRateLive / MapLocationLive subscriptions → deltas temps-réel
```

Les deux phases utilisent le même shape de données — la directive gère la transition.

### Pattern directive live (exemple HeartRate)

```typescript
ngOnInit(): void {
  runInInjectionContext(this.injector, () => {
    const dashboard = this.dogService.watchDashboard(this.appHeartRateChart);

    const initialPoints$ = toObservable(dashboard).pipe(
      map(s => s.data?.heartRateSeries ?? null),
      filter(series => !!series?.length),
      take(1),                          // pre-fill : une seule émission
    );

    const chartData$ = initialPoints$.pipe(
      switchMap(initial =>
        this.dogService.heartRateLive$(this.appHeartRateChart).pipe(
          scan((win, { bpm }) => [ ...win.slice(1), { value: bpm } ], initial),
          startWith(initial),
        )
      ),
      startWith<ChartCardData>({ variant: 'skeleton' }),
      takeUntilDestroyed(),             // DestroyRef = directive via injector
    );

    const chartData = toSignal(chartData$, { requireSync: true });
    effect(() => this.host.data.set(chartData()));
  });
}
```

**Points clés** :
- `runInInjectionContext` obligatoire dans `ngOnInit` (les `@Input` ne sont pas disponibles dans le constructeur)
- `take(1)` sur le pre-fill — une seule émission du cache initial
- `takeUntilDestroyed()` sans argument = DestroyRef de la directive via `runInInjectionContext`
- Labels X-axis **fixes** sur les graphes live → morphing in-place, pas de scroll ECharts

---

## Règles d'équipe actées

1. `fetchPolicy: 'cache-and-network'` sur `watchQuery` — jamais overridé sans raison documentée
2. Apollo cache = seule source de vérité — jamais `signal.set()` après mutation
3. `keyFields: false` sur tous les types live éphémères dans `cache.config.ts`
4. `takeUntilDestroyed()` obligatoire sur toutes les subscriptions
5. `type:data-access` n'importe jamais `type:ui`
6. Fragments co-localisés avec leurs directives — jamais de fichier GraphQL central
7. Incrémenter `SCHEMA_VERSION` à chaque breaking change (cache Capacitor persisté sur device)

---

## Cache versioning (Capacitor)

```typescript
const SCHEMA_VERSION = '1'; // incrémenter à chaque breaking change
const stored = await AsyncStorage.getItem('SCHEMA_VERSION');
if (stored !== SCHEMA_VERSION) {
  await cache.reset();
  await AsyncStorage.setItem('SCHEMA_VERSION', SCHEMA_VERSION);
}
```

Le cache persisté sur device est la principale source de corruption en production mobile.

---

## Matrice de risque — évolution schema

| Changement | Impact fragments | Impact cache | Action |
|---|---|---|---|
| Nouveau champ nullable | Aucun | Aucun | — |
| Champ renommé | Erreur TS codegen | Stale data | `@deprecated` + migration |
| Type `keyFields:false` modifié | Erreur TS | Aucun | Update fragment seul |
| Type normalisé (`Dog`) modifié | Erreur TS | **Cache corrompu** | Incrémenter `SCHEMA_VERSION` |
| Liste → paginated | Erreur TS | Entrées orphelines | `merge` function dans typePolicies |

---

## Lancer le codegen

```bash
nx run data-access:codegen
```

Génère `libs/data-access/src/generated/graphql.ts` depuis le schema dans `libs/shared/src/lib/graphql/schema.graphql`.
