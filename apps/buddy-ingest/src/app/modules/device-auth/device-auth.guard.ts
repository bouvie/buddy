import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

/**
 * Vérifie l'API key du device dans le header X-Device-Key.
 * La résolution deviceId → dogId est faite dans IngestService (DB bridge).
 *
 * TODO Phase suivante : validation contre la table devices en DB.
 */
@Injectable()
export class DeviceAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<{ headers: Record<string, string> }>();
    const apiKey = request.headers['x-device-key'];

    if (!apiKey) {
      throw new UnauthorizedException('Missing X-Device-Key header');
    }

    // TODO : valider contre devices table
    return true;
  }
}
