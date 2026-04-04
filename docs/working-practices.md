# Working Practices

Pratiques de collaboration entre Alex et Claude Code.

Cycle de vie : **En observation** → **Validée** (ou supprimée) après au moins une session de validation.

---

## Validées

_(aucune pour l'instant)_

---

## En observation

### Docs officielles avant hypothèses (depuis 2026-04-04)

Avant de tenter un fix par hypothèses successives sur un problème technique (erreur de build, config d'outil, API inconnue), consulter la documentation officielle de l'outil concerné en premier.

**Contexte d'origine :** fix `rules-engine:build` — plusieurs tentatives de `rootDir` par tâtonnement alors que la doc `@nx/js:tsc` aurait orienté directement vers la bonne solution.

**Comportement attendu :** si le problème implique un outil tiers (executor Nx, compilateur, framework), ouvrir la doc avant la 2e tentative.

---

## Abandonnées

_(aucune pour l'instant)_
