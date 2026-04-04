import { Module } from '@nestjs/common';
import { EventBusModule } from '@buddy/event-bus';
import { TelemetryDataAccessModule } from '@buddy/telemetry-data-access';
import { ConsumerModule } from './modules/consumer/consumer.module';
import { AnalysisModule } from './modules/analysis/analysis.module';
import { NotificationModule } from './modules/notification/notification.module';

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
    NotificationModule,
    AnalysisModule,
    ConsumerModule,
  ],
})
export class AppModule {}
