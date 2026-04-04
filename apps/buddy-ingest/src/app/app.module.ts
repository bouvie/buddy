import { Module } from '@nestjs/common';
import { EventBusModule } from '@buddy/event-bus';
import { TelemetryDataAccessModule } from '@buddy/telemetry-data-access';
import { MqttModule } from './modules/mqtt/mqtt.module';
import { IngestModule } from './modules/ingest/ingest.module';
import { DeviceAuthModule } from './modules/device-auth/device-auth.module';
import { SimulatorModule } from './modules/simulator/simulator.module';

@Module({
  imports: [
    EventBusModule.forRoot({
      host: process.env['REDIS_HOST'] ?? 'localhost',
      port: parseInt(process.env['REDIS_PORT'] ?? '6379', 10),
    }),
    TelemetryDataAccessModule.forRoot({
      host:     process.env['DB_HOST']     ?? 'localhost',
      port:     parseInt(process.env['DB_PORT'] ?? '5432', 10),
      database: process.env['DB_NAME']     ?? 'buddy',
      user:     process.env['DB_USER']     ?? 'buddy',
      password: process.env['DB_PASSWORD'] ?? 'buddy_dev',
    }),
    DeviceAuthModule,
    MqttModule,
    IngestModule,
    SimulatorModule,
  ],
})
export class AppModule {}
