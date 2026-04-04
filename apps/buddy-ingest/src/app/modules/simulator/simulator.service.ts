import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { DeviceBatch } from '@buddy/device-contracts';

/**
 * Simule un bracelet IoT publiant des mesures sur MQTT.
 * Actif uniquement quand SIMULATE_DEVICE=true (ou en l'absence de variable explicite en dev).
 *
 * Le device simulé `sim-001` publie un DeviceBatch toutes les secondes :
 *  - Fréquence cardiaque : oscillation sinusoïdale + bruit aléatoire (réaliste canin 70–100 bpm)
 *  - GPS : marche aléatoire autour de Marseille
 *  - Accélération : corrélée à la FC (chien actif = FC haute = acc haute)
 *  - Batterie : décharge lente, remise à 100 % si < 20 %
 */
@Injectable()
export class SimulatorService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(SimulatorService.name);
  private client!: mqtt.MqttClient;
  private intervalId: ReturnType<typeof setInterval> | undefined;

  private readonly deviceId = 'sim-001';
  private readonly brokerUrl = process.env['MQTT_BROKER_URL'] ?? 'mqtt://localhost:1883';

  // État interne du device simulé
  private tick = 0;
  private lastBpm = 78;
  private lat = 60.245347;
  private lng = 5.426638;
  private battery = 100;

  private readonly enabled = process.env['SIMULATE_DEVICE'] !== 'false';

  onModuleInit(): void {
    if (!this.enabled) {
      this.logger.log('Device simulator disabled (SIMULATE_DEVICE=false)');
      return;
    }

    this.client = mqtt.connect(this.brokerUrl, {
      clientId: `buddy-simulator-${Date.now()}`,
      clean: true,
      reconnectPeriod: 5000,
    });

    this.client.on('connect', () => {
      this.logger.log(`Simulator connected — publishing as device ${this.deviceId}`);
      this.startPublishing();
    });

    this.client.on('error', (err) => this.logger.error('Simulator MQTT error', err));
  }

  private startPublishing(): void {
    this.intervalId = setInterval(() => {
      this.tick++;
      const batch = this.buildBatch();
      const topic = `devices/${this.deviceId}/telemetry`;
      this.client.publish(topic, JSON.stringify(batch));
    }, 1000);
  }

  private buildBatch(): DeviceBatch {
    // Fréquence cardiaque canine : oscillation RSA + variabilité + réversion vers base
    const rsa = Math.sin((this.tick * 2 * Math.PI) / 3) * 4;
    const hrv = (Math.random() - 0.5) * 3;
    const reversion = (78 - this.lastBpm) * 0.06;
    this.lastBpm = Math.round(
      Math.max(60, Math.min(105, this.lastBpm + rsa * 0.4 + hrv + reversion)),
    );

    // Marche aléatoire GPS (~1–2 m par tick)
    this.lat += (Math.random() - 0.5) * 0.00002;
    this.lng += (Math.random() - 0.5) * 0.00002;

    // Accélération corrélée à la FC (0.3–2.5 g)
    const normalizedBpm = (this.lastBpm - 60) / 45;
    const acc = parseFloat((0.3 + normalizedBpm * 2.2 + (Math.random() - 0.5) * 0.3).toFixed(2));

    // Batterie
    this.battery = parseFloat((this.battery - 0.005).toFixed(3));
    if (this.battery < 20) this.battery = 100;

    return {
      did: this.deviceId,
      r: [
        {
          ts: Date.now(),
          gps: [parseFloat(this.lat.toFixed(6)), parseFloat(this.lng.toFixed(6))],
          hr: this.lastBpm,
          acc,
          bat: Math.round(this.battery),
        },
      ],
    };
  }

  onModuleDestroy(): void {
    clearInterval(this.intervalId);
    this.client?.end();
  }
}
