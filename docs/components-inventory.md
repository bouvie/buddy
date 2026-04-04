# Inventaire des composants K-10

> Snapshot — avril 2026. Source de vérité : `libs/ui/src/lib/components/`

---

## Composants implémentés (39)

### Atomes / Actions
| Composant | Sélecteur | Notes |
|---|---|---|
| Button | `k10-button` | variants: primary, secondary, ghost, danger |
| Badge | `k10-badge` | |
| Avatar | `k10-avatar` | sizes: sm, md, lg — src ou initials |
| Divider | `k10-divider` | |
| FAB | `k10-fab` | Floating Action Button — mobile |
| Tag | `k10-tag` | Pills / filtres |

### Formulaires
| Composant | Sélecteur | CVA | Notes |
|---|---|---|---|
| Input | `k10-input` | ✓ | |
| Select | `k10-select` | ✓ | |
| Checkbox | `k10-checkbox` | ✓ | animation pop au check |
| Radio | `k10-radio` | ✓ | |
| Toggle | `k10-toggle` | ✓ | spring thumb + glow actif |
| Slider | `k10-slider` | ✓ | |
| FormField | `k10-form-field` | — | layout wrapper |
| Search | `k10-search` | — | champ recherche |
| Segmented | `k10-segmented` | — | segmented control |
| Stepper | `k10-stepper` | — | multi-step |
| Stepper Control | `k10-stepper-control` | — | actions du stepper |

### Feedback & État
| Composant | Sélecteur | Notes |
|---|---|---|
| Alert | `k10-alert` | |
| Toast | `k10-toast` | |
| Spinner | `k10-spinner` | |
| Progress | `k10-progress` | glow sur le fill |
| Skeleton | `k10-skeleton` | shimmer animé |
| Live Indicator | `k10-live-indicator` | badge temps-réel pulsant |
| Notification Dot | `k10-notification-dot` | badge sur icône |

### Conteneurs
| Composant | Sélecteur | Notes |
|---|---|---|
| Card | `k10-card` | |
| Chart Card | `k10-chart-card` | variants: line-area, bar, skeleton, empty — isLive déclenche animated border |
| Metric Card | `k10-metric-card` | |

### Navigation & Layout
| Composant | Sélecteur | Notes |
|---|---|---|
| App Shell | `k10-app-shell` | grid layout, scroll-hide topbar mobile |
| Topbar | `k10-topbar` | slot-based (start/center/end) |
| Side Nav | `k10-side-nav` | desktop uniquement |
| Bottom Nav | `k10-bottom-nav` | mobile uniquement |
| Nav Item | `k10-nav-item` | variants: bottom, side |
| List Item | `k10-list-item` | |
| Tabs | `k10-tabs` | |

### Overlays & Info
| Composant | Sélecteur | Notes |
|---|---|---|
| Modal | `k10-modal` | |
| Tooltip | `k10-tooltip` | |
| Dropdown | `k10-dropdown` | |
| Empty State | `k10-empty-state` | |

### Spéciaux
| Composant | Sélecteur | Notes |
|---|---|---|
| Map | `k10-map` | wrapper Google Maps |

---

## Gap vs cibles K-10 (53 composants)

**14 composants cibles non implémentés :**

| Composant | Niveau | Cas d'usage Buddy |
|---|---|---|
| `rating` | Atom | Évaluation santé, satisfaction |
| `live-indicator` (avancé) | Molecule | Point pulsant — implémenté basique |
| `swipe-action` | Molecule | Supprimer session, archiver |
| `image-card` | Molecule | Card avec photo (profil chien, lieu) |
| `session-card` | Organism | Résumé d'une session d'activité |
| `profile-card` | Organism | Profil chien/utilisateur compact |
| `metric-hero` | Organism | BPM ou km en plein écran |
| `bottom-sheet` | Organism | Drawer mobile (détails, filtres) |
| `action-sheet` | Organism | Menu contextuel iOS |
| `date-picker` | Organism | Sélection de date |
| `time-picker` | Organism | Sélection d'heure |
| `accordion` | Organism | FAQ, détails de santé |
| `timeline` | Organism | Historique sessions, journal santé |
| `data-table` | Organism | Tableau export desktop |
| `pull-refresh` | Organism | Pull-to-refresh mobile |
| `onboarding-step` | Organism | Étapes d'onboarding |
| `permission-request` | Template | Demande GPS, notifications |
| `error-state` | Template | Erreur réseau, timeout |
| `stat-row` | Molecule | Ligne de 3-4 stats horizontales |

Ces absences sont **non-bloquantes pour le MVP** — les 4 features actives (dashboard, dogs, alerts, profile) fonctionnent avec les 39 existants.

---

## Mapping besoins UI → composants K-10

| Besoin UI | Composant | Notes |
|---|---|---|
| Métrique chiffrée | `k10-metric-card` | valeur + label + trend |
| Graphique temporel | `k10-chart-card` + directive | `line-area` ou `bar` |
| Liste d'éléments | `k10-list-item` | répété en `@for` |
| État vide | `k10-empty-state` | title + description + actionLabel |
| Chargement | `k10-skeleton` ou variant `skeleton` du composant | |
| Formulaire | `k10-form-field` + `k10-input`/`k10-select`/`k10-toggle` | toujours avec FormField |
| Action principale | `k10-button variant="primary"` | |
| Confirmation/info | `k10-alert` ou `k10-toast` | Toast = temporel |
| Identité utilisateur | `k10-avatar` | + routerLink si cliquable |
| Carte géographique | `k10-map` | dans un `k10-card padding="none"` |
| Recherche | `k10-search` | |
| Filtre/tag | `k10-tag` ou `k10-segmented` | |
| Navigation mobile | `k10-bottom-nav` + `k10-nav-item` | |
| Navigation desktop | `k10-side-nav` + `k10-nav-item` | |
| Live data indicator | `k10-live-indicator` | + animated border sur `k10-chart-card[isLive]` |

---

## Exports publics

Source de vérité : `libs/ui/src/index.ts`

```typescript
export * from './lib/components/index';       // 39 composants
export * from './lib/tokens/echarts-theme';   // palette ECharts K-10
export * from './lib/tokens/provide-k10-charts'; // provider Angular (SVGRenderer)
export * from './lib/utils';
```

**Note** : `provide-k9-charts.ts` existe comme alias legacy — utiliser `provideK10Charts()`.
