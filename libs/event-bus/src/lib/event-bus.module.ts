import { Module, DynamicModule } from '@nestjs/common';
import { EventBusService } from './event-bus.service';

export interface EventBusModuleOptions {
  host: string;
  port: number;
}

@Module({})
export class EventBusModule {
  static forRoot(options: EventBusModuleOptions): DynamicModule {
    return {
      module: EventBusModule,
      providers: [
        { provide: 'EVENT_BUS_OPTIONS', useValue: options },
        EventBusService,
      ],
      exports: [EventBusService],
      global: true,
    };
  }
}
