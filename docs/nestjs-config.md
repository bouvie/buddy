# NestJS & Backend — buddy-api

> Snapshot — avril 2026. Source de vérité : `apps/buddy-api/` + `libs/shared/`

---

## Structure de apps/buddy-api

```
apps/buddy-api/
├─ src/
│  ├─ main.ts                        Bootstrap Fastify + CORS
│  └─ app/
│     ├─ app.module.ts               GraphQL + ServeStatic + DogModule + HealthModule + LocationModule
│     └─ modules/
│        ├─ dog/
│        │  ├─ dog.module.ts         Imports HealthModule + LocationModule
│        │  ├─ dog.resolver.ts       @Query('dog') + @ResolveField
│        │  └─ dog.service.ts        findOne() — données statiques mock
│        ├─ health/
│        │  ├─ health.module.ts      Provider PubSub HEALTH_PUB_SUB
│        │  ├─ health.service.ts     BPM live (setInterval) + sleep series
│        │  └─ health.tokens.ts      export const HEALTH_PUB_SUB
│        └─ location/
│           ├─ location.module.ts    Provider PubSub LOCATION_PUB_SUB
│           ├─ location.service.ts   GPS live (setInterval) + lastLocation
│           └─ location.tokens.ts    export const LOCATION_PUB_SUB
├─ webpack.config.js                 Build Node + copie SDL graphql/ en prod
├─ tsconfig.json
└─ tsconfig.app.json
```

---

## main.ts — Bootstrap

```typescript
import 'reflect-metadata'; // ← premier import absolu — obligatoire

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, new FastifyAdapter()
  );

  await app.register(fastifyCors, {
    origin: process.env['CORS_ORIGIN'] ?? 'http://localhost:4200',
  });

  const port = process.env['PORT'] ?? 3000;
  await app.listen(port, '0.0.0.0'); // '0.0.0.0' obligatoire pour container/reverse-proxy
}
```

---

## app.module.ts — AppModule

```typescript
const isProd = process.env['NODE_ENV'] === 'production';

// Dev  : SDL lu depuis libs/shared/src/lib/graphql/ via process.cwd()
// Prod : SDL copié par webpack dans dist/apps/buddy-api/graphql/
const schemaPaths = isProd
  ? [join(__dirname, 'graphql/**/*.graphql')]
  : [join(process.cwd(), 'libs/shared/src/lib/graphql/**/*.graphql')];

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: schemaPaths,
      playground:    false,         // conflit peer dep Apollo v4/v5 sur le plugin
      introspection: !isProd,       // graphql-codegen a besoin de l'introspection
      subscriptions: { 'graphql-ws': true },
      context: ({ request }) => ({ req: request }), // point d'extension auth (JWT)
    }),
    ServeStaticModule.forRoot({
      // Sert le build Angular en production (monorepo co-déployé)
      rootPath: isProd
        ? join(__dirname, '../buddy-frontend/browser')
        : join(process.cwd(), 'dist/apps/buddy-frontend/browser'),
      exclude: ['/graphql{,/**}'],
    }),
    DogModule,
    HealthModule,
    LocationModule,
  ],
})
export class AppModule {}
```

---

## webpack.config.js

```javascript
new NxAppWebpackPlugin({
  target: 'node',
  compiler: 'tsc',
  main: './src/main.ts',
  tsConfig: './tsconfig.app.json',
  assets: [
    './src/assets',
    // SDL copié dans dist/apps/buddy-api/graphql/ pour typePaths en prod
    {
      glob: '**/*.graphql',
      input: '../../libs/shared/src/lib/graphql',
      output: 'graphql',
    },
  ],
  optimization: process.env.NODE_ENV === 'production',
  outputHashing: 'none',
  generatePackageJson: true,
  sourceMap: true,
})
```

---

## project.json — buddy-api

```json
{
  "tags": ["type:app-api", "scope:buddy"],
  "implicitDependencies": ["shared"]
}
```

`implicitDependencies: ["shared"]` est **obligatoire** — NX ne détecte pas la dépendance sur le SDL via `process.cwd()` (accès filesystem, pas `import`). Sans cette ligne, `nx affected` ne rebuild pas l'API si le schema change.

---

## libs/shared — Source de vérité SDL

```
libs/shared/src/lib/
├─ graphql/
│  └─ schema.graphql        SDL — source de vérité pour le schema GraphQL
└─ types/
   ├─ dog.types.ts           interface Dog { id: string; name: string }
   ├─ health.types.ts        interface HeartRatePoint, SleepPoint
   └─ location.types.ts      interface LocationPoint
```

**schema.graphql** (état actuel) :
```graphql
type Query {
  dog(id: ID!): Dog
}

type Subscription {
  heartRate(dogId: ID!): HeartRatePoint!
  location(dogId: ID!):  LocationPoint!
}

type Dog {
  id:               ID!
  name:             String!
  lastLocation:     LocationPoint
  heartRateSeries(last: Int! = 30): [HeartRatePoint!]!
  sleepSeries(last: Int! = 7):      [SleepPoint!]!
}

type LocationPoint {
  lat:       Float!
  lng:       Float!
  timestamp: String!
  address:   String     # nullable — enrichissement géographique optionnel
}

type HeartRatePoint {
  timestamp: String!
  bpm:       Int!
}

type SleepPoint {
  date:  String!        # ISO date — transformée en label côté frontend
  hours: Float!
}
```

---

## Modules de domaine — Patterns actés

### Pattern tokens séparés (évite la dépendance circulaire)

```typescript
// health.tokens.ts
export const HEALTH_PUB_SUB = 'HEALTH_PUB_SUB';

// health.module.ts
{ provide: HEALTH_PUB_SUB, useFactory: () => new PubSub() }

// health.service.ts
constructor(@Inject(HEALTH_PUB_SUB) private readonly pubSub: PubSub) {}
```

### Lifecycle — règle onModuleInit

```typescript
// ✗ Interdit — effets de bord dans le constructeur
constructor() { this.intervalId = setInterval(...) }

// ✓ Correct — lifecycle NestJS
onModuleInit(): void  { this.intervalId = setInterval(...) }
onModuleDestroy(): void { clearInterval(this.intervalId) }
```

### Subscription — payload key

```typescript
// heartRate = nom exact du champ dans le SDL Subscription { heartRate(...) }
this.pubSub.publish(HEART_RATE_UPDATED, {
  heartRate: { timestamp: new Date().toISOString(), bpm: this.lastBpm }
});

@Subscription('heartRate')
heartRate() { return this.pubSub.asyncIterableIterator(HEART_RATE_UPDATED); }
```

### Resolver — agnosticisme HTTP

```typescript
// ✗ Interdit — dépendance plateforme Express
@Query() async dog(@Req() req: Request) { ... }

// ✓ Correct — agnostique Express/Fastify
@Query('dog')
dog(@Args('id') id: string): Dog | null {
  return this.dogService.findOne(id);
}
```

---

## État des modules (avril 2026)

| Module | Données | Subscription | Notes |
|---|---|---|---|
| `DogModule` | `findOne(id)` — mock statique (Rex) | — | Compose HealthModule + LocationModule |
| `HealthModule` | `getHeartRateSeries(last)` + `getSleepSeries(last)` | `HeartRateLive` (1s interval) | BPM simulé avec variabilité cardiaque canine |
| `LocationModule` | `getCurrent()` — Marseille 13009 fixe | `LocationLive` (1s interval) | GPS fixe — filtrage multi-chiens `_dogId` réservé |

**Authentification** : non implémentée — `connectionParams` WebSocket commenté, `context({ req })` prêt.

**Multi-chiens** : `_dogId` passé en paramètre mais ignoré côté services — filtrage à implémenter.

---

## Stack technique actée

| Décision | Choix | Raison |
|---|---|---|
| Plateforme HTTP | `@nestjs/platform-fastify` | Démarré Fastify — pas de dette Express |
| Transport GraphQL | `@nestjs/apollo` + `ApolloDriver` | v13 — `ApolloFastifyDriver` n'existe plus |
| Apollo Server | `@apollo/server@^5` | Requis par `@nestjs/apollo@13` |
| WebSocket | `graphql-ws` | Partagé avec le frontend |
| Approche schema | Schema-first (SDL dans `libs/shared`) | Frontend-oriented — SDL précède les resolvers |
| PubSub | `graphql-subscriptions` in-memory | Suffisant sans clustering |
| Fichiers statiques | `@nestjs/serve-static` | Sert le build Angular — déploiement commun |

---

## tsconfig — règles backend

```json
// libs/shared/tsconfig.lib.json — surcharger pour éviter l'héritage Angular
{
  "compilerOptions": {
    "moduleResolution": "node",
    "module": "commonjs"
  }
}

// apps/buddy-api/tsconfig.app.json — exclure les types DOM
{
  "compilerOptions": {
    "lib": ["ES2022"]  // jamais "dom" côté backend
  }
}
```
