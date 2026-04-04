# Architecture NX — Projet Buddy

> Snapshot — avril 2026. Source de vérité : `nx.json`, `project.json` de chaque lib/app.

---

## Structure du monorepo

```
c:\Users\Alex\buddy-1/
├─ apps/
│  ├─ buddy-frontend/              Angular 21+ — tag: type:app, scope:buddy
│  │  ├─ src/app/
│  │  │  ├─ app.ts                 Root component (AppShell + navigation)
│  │  │  ├─ app.routes.ts          Routes lazy-loaded + providers de route
│  │  │  ├─ app.config.ts          Providers globaux (router, apollo, http, maps)
│  │  │  ├─ app.css
│  │  │  └─ features/
│  │  │     ├─ dashboard/          Hyper-structurée : 4 directives co-localisées
│  │  │     │  ├─ dashboard.component.ts/html/css
│  │  │     │  ├─ dashboard.graphql
│  │  │     │  └─ directives/
│  │  │     │     ├─ heart-rate-chart.directive.ts + .graphql
│  │  │     │     ├─ map-location.directive.ts + .graphql
│  │  │     │     ├─ sleep-time-chart.directive.ts + .graphql
│  │  │     │     └─ activity-report.directive.ts + .graphql (mock, schema TODO)
│  │  │     ├─ dogs/
│  │  │     ├─ alerts/
│  │  │     └─ profile/
│  │  └─ src/environments/         environment.ts + environment.prod.ts
│  │
│  └─ buddy-api/                   NestJS + Fastify — tag: type:app-api, scope:buddy
│     ├─ src/
│     │  ├─ main.ts                Bootstrap Fastify + CORS
│     │  └─ app/
│     │     ├─ app.module.ts       GraphQL + ServeStatic + modules
│     │     └─ modules/
│     │        ├─ dog/             Resolver + Service (compose health + location)
│     │        ├─ health/          Service + Tokens (PubSub heartRate)
│     │        └─ location/        Service + Tokens (PubSub location)
│     └─ webpack.config.js         Build Node + copie SDL en prod
│
├─ libs/
│  ├─ ui/                          @buddy/ui — tag: type:ui, scope:shared
│  │  ├─ src/lib/
│  │  │  ├─ components/            39 composants Angular
│  │  │  ├─ tokens/
│  │  │  │  ├─ variables.css       Source de vérité tokens K-10
│  │  │  │  ├─ echarts-theme.ts
│  │  │  │  └─ provide-k10-charts.ts
│  │  │  └─ utils/
│  │  ├─ .storybook/
│  │  ├─ tailwind.config.js
│  │  └─ FIGMA.md                  Convention Figma ↔ code (1607 lignes)
│  │
│  ├─ data-access/                 @buddy/data-access — tag: type:data-access, scope:buddy
│  │  └─ src/lib/
│  │     ├─ graphql/
│  │     │  ├─ apollo.config.ts
│  │     │  ├─ cache.config.ts
│  │     │  └─ ws-link.config.ts
│  │     └─ services/
│  │        ├─ base-query.service.ts
│  │        └─ dog.service.ts
│  │
│  └─ shared/                      @buddy/shared — tag: type:shared (ou scope:shared)
│     └─ src/lib/
│        ├─ graphql/
│        │  └─ schema.graphql      SDL source de vérité (lu par buddy-api en dev)
│        └─ types/
│           ├─ dog.types.ts        interface Dog { id, name }
│           ├─ health.types.ts     interface HeartRatePoint, SleepPoint
│           └─ location.types.ts   interface LocationPoint
│
├─ android/                        Capacitor Android
├─ ios/                            Capacitor iOS
└─ capacitor.config.ts
```

---

## Module boundaries NX

```
type:app (buddy-frontend)    → peut importer type:ui, type:data-access, scope:shared
type:app-api (buddy-api)     → peut importer scope:shared UNIQUEMENT
type:data-access             → peut importer scope:shared UNIQUEMENT — jamais type:ui
type:ui                      → peut importer scope:shared UNIQUEMENT
type:shared / scope:shared   → n'importe rien
```

**Règle critique** : `type:data-access` ne peut **jamais** importer `type:ui`. Les types partagés entre ui et data-access vont dans `libs/shared`.

---

## app.config.ts — Providers globaux

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),                    // requis par apollo-angular HttpLink
    provideApollo(createApolloOptions(
      environment.graphqlHttpUrl,
      environment.graphqlWsUrl,
    )),
    { provide: GOOGLE_MAPS_API_KEY, useValue: environment.googleMapsApiKey },
    // ⚠️ provideK10Charts() N'EST PAS ici — déclaré dans la route dashboard
  ],
};
```

---

## app.routes.ts — Routes lazy

```typescript
export const routes: Routes = [
  { path: '',        redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    providers: [provideK10Charts()],        // ECharts uniquement pour cette route (~150kB gzip)
    loadComponent: () => import('./features/dashboard/dashboard.component')
      .then(m => m.DashboardComponent),
  },
  {
    path: 'dogs',
    loadComponent: () => import('./features/dogs/dogs.component')
      .then(m => m.DogsComponent),
  },
  {
    path: 'alerts',
    loadComponent: () => import('./features/alerts/alerts.component')
      .then(m => m.AlertsComponent),
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile.component')
      .then(m => m.ProfileComponent),
  },
  { path: '**', redirectTo: 'dashboard' },
];
```

**Règles** :
- Toujours `loadComponent` (lazy) — jamais d'import direct dans `app.routes.ts`
- `providers: [provideK10Charts()]` **uniquement** sur les routes qui utilisent `k10-chart-card`
- Import depuis `@buddy/ui` : `provideK10Charts` (pas `provideK9Charts` — alias legacy)

---

## app.ts — Navigation

```typescript
readonly navItems: NavItemConfig[] = [
  { label: 'Accueil', route: '/dashboard', icon: SVG_HOME },
  { label: 'Chiens',  route: '/dogs',      icon: SVG_DOGS },
  { label: 'Alertes', route: '/alerts',    icon: SVG_ALERTS },
  { label: 'Profil',  route: '/profile',   icon: SVG_PROFILE },
];
```

---

## Tags NX et implications

| App / lib | Tag type | Tag scope | Peut importer |
|---|---|---|---|
| `apps/buddy-frontend` | `type:app` | `scope:buddy` | ui, data-access, shared |
| `apps/buddy-api` | `type:app-api` | `scope:buddy` | shared |
| `libs/ui` | `type:ui` | `scope:shared` | shared |
| `libs/data-access` | `type:data-access` | `scope:buddy` | shared |
| `libs/shared` | _(scope:shared)_ | `scope:shared` | rien |

---

## Targets NX par projet

**buddy-frontend** : `build` (Vite), `serve`, `test` (Vitest), `lint`, `cap-sync`, `cap-open-ios`, `cap-open-android`

**buddy-api** : `build` (webpack + NxAppWebpackPlugin), `serve` (@nx/js:node), `prune-lockfile`, `copy-workspace-modules`

**libs/ui** : `build` (ng-packagr), `test` (Vitest), `lint`, `storybook`, `build-storybook`

**libs/data-access** : `lint`, `codegen` (`graphql-codegen --config codegen.ts`)

---

## Migration Nx (état avril 2026)

- Branche active : `feat/nx-monorepo-migration`
- Structure cible opérationnelle : `apps/` + `libs/`
- Ancienne structure `buddy-frontend/buddy-frontend/` : **non supprimée**, en attente de vérification
- **Avant tout edit** : confirmer que le fichier cible est bien dans la nouvelle structure

---

## Storybook

- Port : 6006
- Config : `libs/ui/.storybook/`
- Stories : `libs/ui/src/**/*.stories.ts`
- Backgrounds Storybook : k10-bg, k10-surface, k10-surface-raised, white
- Build : `nx build-storybook ui` → `dist/storybook/ui`

---

## Capacitor

App web packagée en iOS + Android via Ionic Capacitor.

```typescript
// capacitor.config.ts — targets Nx
cap-sync, cap-open-ios, cap-open-android, add
```

Implications design system : composants mobile-first (bottom-nav, FAB, safe-area) obligatoires.

---

## Budgets de performance (buddy-frontend)

```
Initial JS bundle : warning 1.2MB / erreur 2MB
Component styles  : warning 4kB  / erreur 8kB
```
