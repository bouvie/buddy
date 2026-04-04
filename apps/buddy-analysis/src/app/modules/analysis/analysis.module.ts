import { Module } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { NotificationModule } from '../notification/notification.module';

@Module({
  imports: [NotificationModule],
  providers: [AnalysisService],
  exports: [AnalysisService],
})
export class AnalysisModule {}
