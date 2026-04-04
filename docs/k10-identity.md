# Identité visuelle K-10 — "Deep Ocean Dark"

> Snapshot — avril 2026. Source de vérité : `libs/ui/src/lib/tokens/variables.css`
> Figma fileKey : `5MS7DIRcSDz7lYm0tjze7x`

---

## Philosophie

K-10 conserve le **sage vert** de K-9 comme couleur primaire (cohérence avec la marque Buddy) et enrichit les surfaces d'une **sous-teinte océanique bleue**. Cette teinte crée une harmonie naturelle avec les cartes géographiques (Google Maps) utilisées dans le dashboard.

---

## Palette chromatique

### Surfaces (hiérarchie à 6 niveaux)

```
bg-deep   #070B11  ← fond absolu, derrière tout
bg        #0C1219  ← fond standard des vues
surface   #121D2A  ← cards, panneaux niveau 1 (sous-teinte bleue)
surface-2 #192538  ← inputs filled, dropdown bg
surface-3 #213047  ← modaux, sidebars, drawers
surface-4 #2A3D5C  ← overlays temporaires
border    #354A62  ← bleuté, distinctif
```

### Rôles sémantiques

```
primary   (sage)    #C4D9C2  ← héritage K-9, légèrement plus lumineux
accent    (teal)    #5C9EA8  ← NOUVEAU K-10 — live data, GPS, temps-réel
secondary (amber)   #F4A86A  ← remplace coral K-9, plus distinct de danger
danger    (red)     #BF6868  ← plus désaturé que K-9, moins agressif sur dark
success             #72C98A  ← token explicite (vs mappé sur primary en K-9)
warning             #F0C060  ← token explicite (vs mappé sur secondary en K-9)
info                #6BB4E8  ← token explicite (vs mappé sur neutral en K-9)
neutral             #B8C0CC
```

---

## Typographie

Font : **Manrope** (400→900) — Google Fonts

| Style | Taille | Line-height | Poids | Rôle |
|---|---|---|---|---|
| display | 36px | 44px | 700 | Héros onboarding |
| h1 | 24px | 32px | 700 | Titre de page |
| h2 | 20px | 28px | 700 | Titre de section |
| h3 | 16px | 24px | 700 | Sous-titre, card title |
| body-large | 18px | 28px | 400 | Corps de texte lecture |
| body | 15px | 22px | 400 | UI standard (**+1px vs K-9's 14px**) |
| body-sm | 13px | 20px | 400 | Descriptions, secondaire |
| label | 11px | 16px | 700 | UPPERCASE — 0.06em letter-spacing |
| caption | 10px | 14px | 400 | Timestamps — 0.04em letter-spacing |
| data-lg | 28px | 36px | 700 | Métrique hero (BPM, km) |
| data-md | 22px | 28px | 700 | Métrique standard |
| data-sm | 18px | 24px | 700 | Métrique compacte |

> `data-*` est une scale formelle K-10 — remplace l'ad-hoc de K-9 pour les métriques santé.

---

## Glassmorphisme (K-10 — systématique)

Réservé aux éléments **flottants sur contenu scrollable mobile**. Jamais sur modaux, sidebars, dropdowns (fond plein `surface-3`).

```
glass-surface : rgba(18, 29, 42, 0.65) + blur 16px → Bottom-Nav, FAB
glass-raised  : rgba(25, 37, 56, 0.70) + blur 20px → Bottom-Sheet handle
glass-deep    : rgba(33, 48, 71, 0.80) + blur 24px → scrim derrière modaux
glass-border  : rgba(53, 74, 98, 0.50)
```

---

## Shadows

```
shadow-primary-glow : 0 0 12px 2px rgba(196, 217, 194, 0.18) ← état actif primary
shadow-accent-glow  : 0 0 12px 2px rgba(92, 158, 168, 0.25)  ← état actif @live
shadow-focus        : 0 0 0 3px rgba(196, 217, 194, 0.35)     ← focus ring
```

---

## Signatures visuelles K-10

**Glow teal** sur tous les éléments `@live` (GPS trace, BPM live, session active) → `shadow-accent-glow`

**Animated border** (rotating conic-gradient) sur les `chart-card[isLive]` → `@property --k10-glow-angle` + `conic-gradient` primary → accent

**Spring systématique** sur tous les états actifs nav/toggle/checkbox → `easing-spring: cubic-bezier(0.34, 1.56, 0.64, 1)`

**Data scale formelle** `data-lg/md/sm` pour l'affichage de métriques santé

**Surface bleue** harmonisée avec les fonds de carte Google Maps

---

## Radius par rôle sémantique

| Rôle | Token | px |
|---|---|---|
| Boutons principaux | `--k10-radius-xl` | 16px |
| FAB | `--k10-radius-full` | 9999px |
| Inputs, search | `--k10-radius-xl` | 16px |
| Cards génériques | `--k10-radius-lg` | 12px |
| Cards de données (metric, chart) | `--k10-radius-md` | 8px |
| Pills (badge, tag, toggle) | `--k10-radius-full` | 9999px |
| Navigation items | `--k10-radius-md` | 8px |
| Tooltips | `--k10-radius-md` | 8px |
| Bottom-sheet (top only) | `--k10-radius-xl` | 16px |

---

## Différences majeures K-9 → K-10

| Aspect | K-9 | K-10 |
|---|---|---|
| Fond de base | `#0F1419` (neutre) | `#0C1219` + sous-teinte bleue |
| Surfaces | 4 niveaux neutres | 6 niveaux bleutés |
| Sémantique couleurs | Mappée (success→primary) | Tokens explicites |
| Accent | Aucun | Teal `#5C9EA8` pour live/GPS |
| Secondary | Coral `#FFB5A1` | Amber `#F4A86A` |
| Body size | 14px | 15px |
| Coverage | 28 composants | 53 cibles (39 implémentés) |
| Glass | Ponctuel (bottom-nav) | Systématique (3 tokens + blur sizes) |
| Data typo | Ad-hoc | Scale formelle data-lg/md/sm |
| Motion tokens | `--k9-easing-emphasis` | `--k10-easing-spring` (renommé) |
| Shadow glow | `--k9-shadow-primary-glow` | `--k10-shadow-primary-glow` + `accent-glow` |
