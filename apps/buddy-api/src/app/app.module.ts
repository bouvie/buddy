import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TelemetryMonitoringDataAccessModule } from '@buddy/telemetry-monitoring-data-access';
import { DogModule } from './modules/dog/dog.module';
import { HealthModule } from './modules/health/health.module';
import { LocationModule } from './modules/location/location.module';

const isProd = process.env['NODE_ENV'] === 'production';

// Dev  : process.cwd() = racine workspace, SDL accessible directement
// Prod : __dirname = dist/apps/buddy-api, SDL copié par webpack dans graphql/
const schemaPaths = isProd
  ? [join(__dirname, 'graphql/**/*.graphql')]
  : [join(process.cwd(), 'libs/reading-contracts/src/lib/graphql/**/*.graphql')];

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: schemaPaths,
      playground:    false,
      introspection: !isProd,
      subscriptions: { 'graphql-ws': true },
      // context vide — point d'extension pour l'auth (JWT depuis headers)
      context: ({ request }: { request: unknown }) => ({ req: request }),
    }),
    ServeStaticModule.forRoot({
      // Dev  : process.cwd() = racine workspace, dist/ accessible directement
      // Prod : __dirname = dist/apps/buddy-api, frontend un niveau au-dessus
      rootPath: isProd
        ? join(__dirname, '../buddy-frontend/browser')
        : join(process.cwd(), 'dist/apps/buddy-frontend/browser'),
      exclude: ['/graphql{,/**}'],
    }),
    TelemetryMonitoringDataAccessModule.forRoot({
      host:     process.env['DB_HOST']     ?? 'localhost',
      port:     parseInt(process.env['DB_PORT'] ?? '5432', 10),
      database: process.env['DB_NAME']     ?? 'buddy',
      user:     process.env['DB_USER']     ?? 'buddy',
      password: process.env['DB_PASSWORD'] ?? 'buddy_dev',
    }),
    DogModule,
    HealthModule,
    LocationModule,
  ],
})
export class AppModule {}
