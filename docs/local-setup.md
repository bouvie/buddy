# Local Setup — Environnement de développement Buddy

## Prérequis

- Docker Desktop
- Node.js 20+
- npm 10+

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Démarrer l'infrastructure
docker compose -f docker/docker-compose.yml up -d

# 3. Vérifier que les services sont UP
docker compose -f docker/docker-compose.yml ps

# 4. Démarrer les apps
nx serve buddy-api        # Lecture GraphQL  — port 3000
nx serve buddy-ingest     # Acquisition MQTT — port 3001
nx serve buddy-analysis   # Analyse          — port 3002
nx serve buddy-frontend   # Frontend Angular — port 4200
```

## Services

| Service | URL | Credentials |
|---|---|---|
| TimescaleDB | `localhost:5432` | buddy / buddy_dev / db: buddy |
| Redis | `localhost:6379` | sans mot de passe |
| EMQX Dashboard | http://localhost:18083 | admin / public |
| EMQX MQTT | `localhost:1883` | sans auth (dev) |

## Outils de debug

```bash
# Démarrer avec Adminer (PostgreSQL UI) + RedisInsight
docker compose -f docker/docker-compose.yml --profile tools up -d
```

| Outil | URL |
|---|---|
| Adminer (PostgreSQL) | http://localhost:8080 |
| RedisInsight | http://localhost:5540 |

## Variables d'environnement

Créer un fichier `.env.local` à la racine (non commité) pour overrider les défauts :

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=buddy
DB_USER=buddy
DB_PASSWORD=buddy_dev

REDIS_HOST=localhost
REDIS_PORT=6379

MQTT_BROKER_URL=mqtt://localhost:1883
```

## Tester l'ingestion (simulation device)

```bash
# Publier un batch MQTT simulé
npx mqtt pub -h localhost -t "devices/device-test-001/telemetry" -m '{
  "did": "device-test-001",
  "r": [
    { "ts": 1712200800000, "gps": [48.8566, 2.3522], "hr": 75, "acc": 0.3, "bat": 85 },
    { "ts": 1712200830000, "gps": [48.8570, 2.3530], "hr": 82, "acc": 1.2, "bat": 84 }
  ]
}'
```

## Schéma DB

Le schéma TimescaleDB s'applique automatiquement au premier démarrage du container.
Pour le réinitialiser :

```bash
docker compose -f docker/docker-compose.yml down -v  # supprime les volumes
docker compose -f docker/docker-compose.yml up -d    # recrée avec schema vierge
```
