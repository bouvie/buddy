import { Injectable, Logger } from '@nestjs/common';
import { EventBusService } from '@buddy/event-bus';
import { NotificationEvent, NOTIFICATION_STREAM_KEY } from '@buddy/notification-contracts';

/**
 * Publie les NotificationEvent sur Redis Streams.
 * buddy-notify (future app) consomme ce stream pour dispatcher FCM / APNs.
 *
 * En V1 : publication sur Redis Streams uniquement.
 * Extension future : Firebase Admin SDK directement si buddy-notify reste dans ce process.
 */
@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  constructor(private readonly eventBus: EventBusService) {}

  async send(event: NotificationEvent): Promise<void> {
    await this.eventBus.publish(NOTIFICATION_STREAM_KEY, {
      payload: JSON.stringify(event),
    });
    this.logger.debug(`Notification published: ${event.type} for user ${event.userId}`);
  }
}
