import { Module, DynamicModule } from '@nestjs/common';
import { Pool } from 'pg';
import { TelemetryRepository } from './telemetry.repository';

export interface TelemetryDataAccessModuleOptions {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
}

@Module({})
export class TelemetryDataAccessModule {
  static forRoot(options: TelemetryDataAccessModuleOptions): DynamicModule {
    const poolProvider = {
      provide: Pool,
      useFactory: () =>
        new Pool({
          host: options.host,
          port: options.port,
          database: options.database,
          user: options.user,
          password: options.password,
        }),
    };

    return {
      module: TelemetryDataAccessModule,
      providers: [poolProvider, TelemetryRepository],
      exports: [TelemetryRepository],
      global: true,
    };
  }
}
