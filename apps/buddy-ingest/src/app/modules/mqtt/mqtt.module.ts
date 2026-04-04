import { Module } from '@nestjs/common';
import { MqttService } from './mqtt.service';
import { IngestModule } from '../ingest/ingest.module';

@Module({
  imports: [IngestModule],
  providers: [MqttService],
})
export class MqttModule {}
