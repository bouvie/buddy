import { Injectable, Logger } from '@nestjs/common';
import { TelemetryEvent } from '@buddy/telemetry-events';
import { TelemetryRepository } from '@buddy/telemetry-data-access';
import { Tier1Rule, Tier1Context, Tier2Rule, Tier2Context } from '@buddy/rules-engine';
import { NotificationService } from '../notification/notification.service';
import { GeofenceRule } from './rules/tier1/geofence.rule';
import { HeartRateThresholdRule } from './rules/tier1/heart-rate-threshold.rule';
import { LowBatteryRule } from './rules/tier1/low-battery.rule';
import { UnusualActivityRule } from './rules/tier2/unusual-activity.rule';

/**
 * Orchestre l'évaluation des règles Tier 1 puis Tier 2.
 *
 * Tier 1 : synchrone, sur payload seul, notification immédiate si trigger.
 * Tier 2 : asynchrone, enrichi avec historique DB.
 *
 * TODO : charger le contexte Tier 1 (geofences, seuils) depuis DB au démarrage
 * et invalider sur changement (cache en mémoire).
 */
@Injectable()
export class AnalysisService {
  private readonly logger = new Logger(AnalysisService.name);

  private readonly tier1Rules: Tier1Rule[] = [
    new GeofenceRule(),
    new HeartRateThresholdRule(),
    new LowBatteryRule(),
  ];

  private readonly tier2Rules: Tier2Rule[] = [
    new UnusualActivityRule(),
  ];

  constructor(
    private readonly telemetryRepository: TelemetryRepository,
    private readonly notificationService: NotificationService,
  ) {}

  async analyze(event: TelemetryEvent): Promise<void> {
    // TODO : résoudre userId depuis deviceId (dog-data-access — hors scope V1)
    const userId = 'TODO_RESOLVE_USER_ID';

    const tier1Context: Tier1Context = {
      heartRateThreshold: 180,
      batteryThreshold: 10,
      geofencePolygon: null, // TODO : charger depuis DB
      userId,
    };

    // ── Tier 1 — Stateless ──────────────────────────────────────
    for (const rule of this.tier1Rules) {
      const notification = rule.evaluate(event, tier1Context);
      if (notification) {
        await this.notificationService.send(notification);
        this.logger.debug(`Tier1 rule "${rule.name}" triggered for device ${event.deviceId}`);
      }
    }

    // ── Tier 2 — Contextuel ─────────────────────────────────────
    const hourlyBaseline = await this.telemetryRepository.findHourlyBaseline(event.deviceId, 24);

    const tier2Context: Tier2Context = { userId, hourlyBaseline };

    for (const rule of this.tier2Rules) {
      const notification = await rule.evaluate(event, tier2Context);
      if (notification) {
        await this.notificationService.send(notification);
        this.logger.debug(`Tier2 rule "${rule.name}" triggered for device ${event.deviceId}`);
      }
    }
  }
}
