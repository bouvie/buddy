import { DynamicModule, Module } from '@nestjs/common';
import { Pool } from 'pg';
import { TelemetryReadRepository } from './telemetry-read.repository';

export interface TelemetryMonitoringDataAccessOptions {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

const POOL_TOKEN = 'TELEMETRY_MONITORING_POOL';

@Module({})
export class TelemetryMonitoringDataAccessModule {
  static forRoot(options: TelemetryMonitoringDataAccessOptions): DynamicModule {
    const poolProvider = {
      provide: POOL_TOKEN,
      useFactory: () =>
        new Pool({
          host:     options.host,
          port:     options.port,
          database: options.database,
          user:     options.user,
          password: options.password,
        }),
    };

    const repositoryProvider = {
      provide: TelemetryReadRepository,
      useFactory: (pool: Pool) => new TelemetryReadRepository(pool),
      inject: [POOL_TOKEN],
    };

    return {
      module: TelemetryMonitoringDataAccessModule,
      providers: [poolProvider, repositoryProvider],
      exports: [TelemetryReadRepository],
      global: true,
    };
  }
}
