import { Module } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { AnalysisModule } from '../analysis/analysis.module';

@Module({
  imports: [AnalysisModule],
  providers: [ConsumerService],
})
export class ConsumerModule {}
