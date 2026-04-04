# K-10 — Convention Figma ↔ Code

> Source de vérité pour la synchronisation entre le fichier Figma K-10 et `libs/ui/`.
> Lue par Claude via MCP lors des audits design system.

---

## Structure du fichier Figma K-10

9 pages :

| Page | Contenu |
|---|---|
| `_Tokens` | Variables Figma — Colors, Spacing, Radius, Typography, Motion, Glass, Shell |
| `_Status` | Tableau de synchronisation composant par composant |
| `Typography` | Spécimens typographiques — scale, poids, line-heights |
| `Colors` | Palette K-10 complète — rôles sémantiques, états |
| `Foundations` | Radius, Spacing, Shadows, Glassmorphism |
| `Components` | 39 composants avec variantes et états |
| `Patterns` | Assemblages récurrents (forms, lists, dashboard layouts) |
| `Motion` | Durées, easings, annotations @animated/@live/@spring |
| `Playground` | Zone de test libre |

---

## Variables Figma — Collections K-10

### Collection `Color` — "Deep Ocean Dark"

| Variable | Valeur | Usage |
|---|---|---|
| `color/bg-deep` | `#070B11` | Fond le plus sombre (abyssal) |
| `color/bg` | `#0C1219` | Fond de l'application |
| `color/surface` | `#121D2A` | Cards, panels |
| `color/surface-raised` | `#192538` | Dropdowns, menus |
| `color/surface-elevated` | `#213047` | Tooltips, modals |
| `color/surface-4` | `#2A3D5C` | Surfaces supplémentaires |
| `color/border` | `#354A62` | Tous les 1px border |
| `color/input-bg` | `#162233` | Fond dédié champs de formulaire |
| `color/input-border` | `#1E2D42` | Bordure dédié champs de formulaire |
| `color/primary` | `#C4D9C2` | Sage — accent principal |
| `color/primary-text` | `#1E2E1C` | Texte sur fond primary |
| `color/primary-hover` | `rgba(196,217,194,0.10)` | Hover subtle |
| `color/primary-pressed` | `rgba(196,217,194,0.20)` | Active/pressed |
| `color/primary-focus` | `rgba(196,217,194,0.35)` | Ring focus |
| `color/primary-subtle` | `rgba(196,217,194,0.06)` | Background très léger |
| `color/accent` | `#5C9EA8` | Teal — live data, GPS, temps-réel |
| `color/accent-text` | `#0D2226` | Texte sur fond accent |
| `color/accent-hover` | `rgba(92,158,168,0.10)` | |
| `color/accent-pressed` | `rgba(92,158,168,0.20)` | |
| `color/accent-focus` | `rgba(92,158,168,0.35)` | |
| `color/accent-subtle` | `rgba(92,158,168,0.06)` | |
| `color/secondary` | `#F4A86A` | Amber — alerte douce |
| `color/secondary-text` | `#3D1E00` | Texte sur fond secondary |
| `color/secondary-hover` | `rgba(244,168,106,0.10)` | |
| `color/secondary-pressed` | `rgba(244,168,106,0.20)` | |
| `color/secondary-focus` | `rgba(244,168,106,0.35)` | |
| `color/secondary-subtle` | `rgba(244,168,106,0.06)` | |
| `color/danger` | `#BF6868` | Erreur, destruction |
| `color/danger-text` | `#2D0A0A` | |
| `color/danger-hover` | `rgba(191,104,104,0.10)` | |
| `color/danger-pressed` | `rgba(191,104,104,0.20)` | |
| `color/danger-focus` | `rgba(191,104,104,0.35)` | |
| `color/danger-subtle` | `rgba(191,104,104,0.06)` | |
| `color/success` | `#72C98A` | Succès, santé OK |
| `color/success-text` | `#0D2914` | |
| `color/success-hover` | `rgba(114,201,138,0.10)` | |
| `color/success-pressed` | `rgba(114,201,138,0.20)` | |
| `color/success-focus` | `rgba(114,201,138,0.35)` | |
| `color/success-subtle` | `rgba(114,201,138,0.06)` | |
| `color/warning` | `#F0C060` | Avertissement |
| `color/warning-text` | `#2D1A00` | |
| `color/warning-hover` | `rgba(240,192,96,0.10)` | |
| `color/warning-pressed` | `rgba(240,192,96,0.20)` | |
| `color/warning-focus` | `rgba(240,192,96,0.35)` | |
| `color/warning-subtle` | `rgba(240,192,96,0.06)` | |
| `color/info` | `#6BB4E8` | Information neutre |
| `color/info-text` | `#0A1A2D` | |
| `color/info-hover` | `rgba(107,180,232,0.10)` | |
| `color/info-pressed` | `rgba(107,180,232,0.20)` | |
| `color/info-focus` | `rgba(107,180,232,0.35)` | |
| `color/info-subtle` | `rgba(107,180,232,0.06)` | |
| `color/neutral` | `#B8C0CC` | Neutre — statut non catégorisé |
| `color/neutral-text` | `#0F1419` | |
| `color/neutral-hover` | `rgba(184,192,204,0.10)` | |
| `color/neutral-pressed` | `rgba(184,192,204,0.20)` | |
| `color/neutral-focus` | `rgba(184,192,204,0.35)` | |
| `color/neutral-subtle` | `rgba(184,192,204,0.06)` | |
| `color/text` | `#E8EDF5` | Texte principal |
| `color/text-secondary` | `#A8B4C4` | Texte secondaire |
| `color/text-muted` | `#68788C` | Texte atténué, placeholder |
| `color/text-disabled` | `rgba(104,120,140,0.40)` | Texte désactivé |

### Collection `Spacing` — base 4px

```
spacing/xs    4px
spacing/sm    8px
spacing/md   12px
spacing/lg   16px
spacing/xl   24px
spacing/xxl  32px
spacing/xxxl 48px
spacing/4xl  64px
spacing/5xl  80px
spacing/6xl  96px
```

### Collection `Radius`

```
radius/none  0
radius/xs    2px
radius/sm    4px   — micro-éléments (checkbox box, skeleton)
radius/md    8px   — éléments inline compacts (badge, tab, dropdown item)
radius/lg   12px   — icon-wraps UNIQUEMENT (alert icon, empty-state icon)
radius/xl   16px   — éléments interactifs (buttons, inputs, cards)
radius/2xl  20px   — FAB lg
radius/full 9999px — pills, chips, tags, avatar circle
```

### Collection `Shell`

```
shell/topbar-height     56px
shell/bottom-nav-height 48px
shell/sidenav-width    240px
shell/z-topbar          50
shell/z-nav            100
```

### Collection `Glass`

```
glass/surface-bg   rgba(18, 29, 42, 0.65)
glass/raised-bg    rgba(25, 37, 56, 0.70)
glass/deep-bg      rgba(33, 48, 71, 0.80)
glass/border       rgba(53, 74, 98, 0.50)
glass/blur-sm      16px
glass/blur-md      20px
glass/blur-lg      24px
```

---

## Styles de texte Figma

| Style | Taille | Poids | Line-height | Letter-spacing | Usage |
|---|---|---|---|---|---|
| `display` | 36px | 700 | 44px | −0.02em | Hero, grandes métriques |
| `h1` | 24px | 700 | 32px | −0.01em | Titres de section |
| `h2` | 20px | 700 | 28px | −0.01em | Sous-titres |
| `h3` | 16px | 700 | 24px | 0 | Titres composant |
| `body-large` | 18px | 400 | 28px | 0 | Corps large |
| `body` | 15px | 400 | 22px | 0 | Corps standard |
| `body-sm` | 13px | 400 | 20px | 0 | Corps petit |
| `label` | 11px | 700 | 16px | 0.06em | Labels de champs (uppercase) |
| `caption` | 10px | 400 | 14px | 0.04em | Métadonnées, badges |
| `data-lg` | 28px | 700 | 36px | −0.02em | Grandes métriques |
| `data-md` | 22px | 700 | 28px | −0.01em | Métriques standard |
| `data-sm` | 18px | 700 | 24px | −0.01em | Métriques compactes |
| `button` | 16px | 700 | 24px | 0 | Texte de bouton (= h3) |

Police : **Manrope** — Regular/Medium/SemiBold/Bold/ExtraBold/Black

---

## Mapping sémantique des états K-10

K-10 dispose de tokens sémantiques dédiés (≠ K-9 qui mappait success→primary, warning→secondary).

| État | Token couleur | Hex | Usage |
|---|---|---|---|
| **success** | `color/success` | `#72C98A` | Santé OK, opération réussie, activité normale |
| **warning** | `color/warning` | `#F0C060` | Alerte douce, données à surveiller |
| **error / danger** | `color/danger` | `#BF6868` | Erreur, valeur critique, action destructrice |
| **info** | `color/info` | `#6BB4E8` | Information neutre, aide contextuelle |
| **live / real-time** | `color/accent` | `#5C9EA8` | GPS temps-réel, fréquence cardiaque live, WebSocket actif |
| **primary / CTA** | `color/primary` | `#C4D9C2` | Action principale, focus, navigation active |
| **secondary / soft-alert** | `color/secondary` | `#F4A86A` | Alerte secondaire, avertissement doux |

---

## Invariants visuels K-10

### R1 — Thème sombre canonical
Fond de l'application : `--k10-color-bg` `#0C1219` ("Deep Ocean Dark"). Jamais de fond blanc ou light. Toutes les surfaces utilisent la hiérarchie bg → surface → surface-raised → surface-elevated → surface-4.

### R2 — Bordures 1px
Toutes les bordures visibles : `1px solid var(--k10-color-border)` (`#354A62`). Jamais de valeur hardcodée. Exception : input-border (`#1E2D42`) pour les champs de formulaire.

### R3 — Rôles radius
```
radius/xl  (16px) → éléments interactifs : boutons, inputs, cards, modals, menus
radius/md  (8px)  → éléments inline : nav-item active, tab active, dropdown item
radius/full       → pills : badge, tag, live-indicator, notification-dot, slider thumb
radius/lg  (12px) → icon-wraps uniquement : alert icon-wrap, empty-state icon-wrap
radius/sm  (4px)  → micro-éléments : checkbox box, skeleton rectangle
```

### R4 — Glow primary
Toute activation d'état primaire porte `--k10-shadow-primary-glow` (`0 0 12px 2px rgba(196,217,194,0.18)`). Exemples : nav-item active, toggle on, stepper step active, progress fill.

Variante accent : `--k10-shadow-accent-glow` (`0 0 12px 2px rgba(92,158,168,0.25)`) pour les éléments live/GPS.

### R5 — Typographie données chiffrées
Les valeurs numériques temps-réel (BPM, km, etc.) utilisent **exclusivement** les styles data-lg/md/sm (28/22/18px, weight bold). Jamais `body` ou `h1` pour des chiffres de monitoring.

### R6 — Animated border live
Les composants en état temps-réel (`isLive=true`) affichent une bordure animée :
```
border       → transparent
::before     → conic-gradient(from 0deg,
                 transparent 0%,
                 var(--k10-color-accent) 40%,
                 var(--k10-color-primary) 70%,
                 transparent 100%)
               animation: spin 5s linear infinite
box-shadow   → pulse 0%→28% opacity · 2.5s ease-in-out infinite
```

### R7 — Spring sur transitions d'état discret
Micro-interactions on/off (nav-item, toggle, checkbox, segmented) : easing spring `cubic-bezier(0.34, 1.56, 0.64, 1)`, `300ms`. Dans Figma : Smart Animate, easing Custom `0.34 / 1.56 / 0.64 / 1`, durée `300ms`.

### R8 — Icônes
Toutes les icônes utilisent `stroke="currentColor"`. Taille standard : `24×24px`. Taille dans bottom-nav et list-item : `20×20px`. Jamais de couleur hardcodée.

### R9 — Glassmorphism — réservé aux éléments flottants mobiles
Le glassmorphism est utilisé **exclusivement** pour les éléments flottants au-dessus du contenu scrollable sur mobile. Utiliser les tokens `glass/*` :
```
backdrop-filter : blur(var(--k10-glass-blur-md))   /* 20px */
background      : var(--k10-glass-raised-bg)         /* rgba(25,37,56,0.70) */
border          : 1px solid var(--k10-glass-border)  /* rgba(53,74,98,0.50) */
```
Composants éligibles : `k10-bottom-nav`. Ne pas appliquer aux modals, dropdowns, tooltips.

### R10 — `radius/lg` (12px) — usage normé : icon-wraps
`radius/lg` est réservé aux **conteneurs d'icône carrés** :
- `alert` icon-wrap : `48×48px · radius/lg`
- `empty-state` icon-wrap : taille variable · `radius/lg`

Ne pas utiliser pour les composants interactifs.

---

## Specs composants — mesures exactes

### Button

```
Selector Angular : k10-button
Variants         : primary | secondary | ghost | danger
Sizes            : sm | md | lg

─── sm ───  height 40px · padding-x 16px · font label (11px/700) · radius xl
─── md ───  height 48px · padding-x 24px · font button (16px/700) · radius xl
─── lg ───  height 56px · padding-x 32px · font body-large (18px/700) · radius xl

─── primary ───
  fill normal    : color/primary (#C4D9C2)
  text           : color/primary-text (#1E2E1C)
  fill hover     : primary + inset white overlay 8%
  active         : scale(0.97)
  fill disabled  : color/surface · text color/text-disabled

─── secondary ───
  fill normal    : transparent
  text           : color/primary
  border         : color/border
  fill hover     : color/primary-hover · border color/primary
  active         : fill primary-pressed · scale(0.97)
  disabled       : border color/border · text color/text-disabled

─── ghost ───
  fill normal    : transparent · text color/text-secondary
  hover          : fill surface-raised · text color/primary
  active         : fill surface-elevated · scale(0.97)
  disabled       : text color/text-disabled

─── danger ───
  fill normal    : color/danger (#BF6868) · text color/danger-text (#2D0A0A)
  hover          : danger + inset white 8%
  active         : scale(0.97)
  disabled       : fill surface · text text-disabled
```

### Tag

```
Selector Angular : k10-tag
Variants         : default | primary | accent | success | warning | danger | info
Sizes            : sm | md
removable        : Boolean — affiche une croix

─── sm ─── height 20px · padding-x 8px · font caption (10px/500/0.03em) · radius full
─── md ─── height 32px · padding-x 14px · font body-sm (13px/500/0.01em) · radius full

─── default  ─── fill surface-raised · border border-color · text text-secondary
─── primary  ─── fill primary-subtle · border primary/20% · text primary
─── accent   ─── fill accent/12% · border accent/25% · text accent
─── success  ─── fill success-subtle · border success/20% · text success
─── warning  ─── fill warning-subtle · border warning/20% · text warning
─── danger   ─── fill danger-subtle · border danger/20% · text danger
─── info     ─── fill info-subtle · border info/20% · text info

remove button : 14×14px · radius full · opacity 0.6 → 1 on hover
```

### FAB

```
Selector Angular : k10-fab
Variants         : primary | accent | secondary | ghost
Sizes            : sm | md | lg
extended         : Boolean — affiche un label (pill)

─── sm ─── 40×40px · radius lg (12px) · icon 16px
─── md ─── 48×48px · radius xl (16px) · icon 20px
─── lg ─── 56×56px · radius 2xl (20px) · icon 22px
─── extended ─── height same · width auto · padding-x 24px · radius full

─── primary ─── fill primary · text primary-text · shadow md
  hover : shadow primary-glow + md · scale(1.04)
─── accent  ─── fill accent · text accent-text · shadow md
  hover : shadow accent-glow · scale(1.04)
─── secondary ─── fill surface-raised · text text · border 1px border · shadow sm
  hover : fill surface-elevated · scale(1.04)
─── ghost ─── fill rgba(255,255,255,0.06) · text text · backdrop-filter blur(8px)
  hover : fill rgba(255,255,255,0.10) · scale(1.04)

active (tous) : scale(0.97)
disabled      : opacity 0.45
```

### Input

```
Selector Angular : k10-input
height           : 56px
radius           : xl (16px)
fill default     : color/input-bg (#162233)
border default   : 1.5px solid color/input-border (#1E2D42)
fill filled      : color/surface-raised
padding-x        : 24px (spacing/xl)
font             : body (15px/400)
placeholder      : color/text-muted

─── focus-within ───
  border : color/accent (#5C9EA8)
  shadow : 0 0 0 3px rgba(92,158,168,0.35)

─── error ───
  border : color/danger
  focus shadow : 0 0 0 3px rgba(191,104,104,0.35)
  icon color : color/danger

─── success ───
  border : color/success
  icon color : color/success

─── disabled ───
  fill   : color/surface
  border : color/border
  cursor : not-allowed
  opacity : 0.45
```

### Search

```
Selector Angular : k10-search
Sizes            : sm | md | lg

─── sm ─── height 36px · padding-x 12px · gap 8px · font caption
─── md ─── height 44px · padding-x 16px · gap 12px · font body
─── lg ─── height 52px · padding-x 24px · gap 12px · font body

fill         : color/surface
border       : 1.5px solid color/border · radius full
icon         : 12-16px · color/accent

focus-within : border color/accent · shadow 0 0 0 3px accent-focus

clear button : 20×20px · radius full · fill surface-raised · text text-muted
               hover : fill surface-elevated · text text

disabled : opacity 0.45 · pointer-events none
```

### Select

```
Selector Angular : k10-select
(identique à k10-input en hauteur et layout)

─── trigger ─── h=56px · padding 0 24px · radius xl
  border   : 1.5px solid input-border · fill input-bg · body (15px/text)
  focus    : border accent · shadow accent-focus
  open     : border accent · shadow accent-focus
  disabled : fill surface · border border · text-muted · opacity 0.45
  error    : border danger

─── menu ─── fill surface-raised · radius xl · border 1px border · shadow-lg
  padding  : 4px · flex col · gap 2px
  offset   : top calc(100% + 4px) · full width
  entrance : @animated select-menu-in · decelerate · fast

─── item ─── h=40px · padding 0 12px · radius lg · body (15px/text)
  hover    : fill surface-elevated
  selected : text primary · medium weight · hover fill primary-subtle
  disabled : opacity 0.4
```

### Checkbox

```
Selector Angular : k10-checkbox
layout           : inline-flex · align-center · gap 8px (spacing/sm)

─── box ─── 20×20px · radius sm (4px) · border 1.5px border · fill transparent

unchecked   : border color/border · fill transparent
hover       : border color/primary · fill primary-hover
checked     : fill primary · border primary · @animated checkbox-pop (scale 1→1.18→1, 200ms, spring)
indeterminate : fill primary · border primary (dash icon)
focus-visible : shadow focus · border primary
disabled    : opacity 0.4 · cursor not-allowed

label text : body (15px/400/text)
```

### Radio

```
Selector Angular : k10-radio
layout           : inline-flex · align-center · gap 8px

─── dot ─── 20×20px · radius full · border 1.5px border · fill transparent
  inner dot : 8×8px · radius full · fill primary-text · scale(0) → scale(1) checked
  transition : spring easing · fast (120ms)

unchecked     : border color/border
hover         : border primary · fill primary-hover
checked       : dot fill primary · border primary · inner scale(1)
focus-visible : shadow focus · border primary
disabled      : opacity 0.4

label text : body (15px/400/text)
```

### Toggle

```
Selector Angular : k10-toggle
layout           : inline-flex · align-center · gap 12px (spacing/md)

─── track ─── 48×28px · radius full
  off    : fill surface-elevated
  on     : fill primary · shadow primary-glow
  transition background-color · normal · standard

─── thumb ─── 20×20px · radius full · top=4px
  off    : left=4px · fill color/text
  on     : left=24px · fill primary-text
  transition left · normal · @spring emphasis

label   : body (15px/400/text)
disabled: opacity 0.4 · cursor not-allowed
```

### Slider

```
Selector Angular : k10-slider
layout           : flex col · gap 8px · full width

─── header ─── flex row · space-between
  label : label (11px/700/uppercase/0.06em) · text-muted
  value : caption (10px/400) · text-secondary

─── track ─── h=4px · radius full · fill surface-elevated
─── fill  ─── h=4px · radius full · fill primary · transition fast standard

─── thumb ─── 20×20px · radius full · fill primary · shadow-md
  hover : scale(1.15) · transition fast
  focus : shadow focus

disabled : opacity 0.4 · pointer-events none
```

### Segmented

```
Selector Angular : k10-segmented
colorRole        : primary | accent | secondary
Sizes            : sm | md
disabled         : Boolean

container : fill surface · border 1px border · radius xl (md size) / lg (sm)
            padding 3px (md) / 2px (sm) · gap 2px

─── sm ─── item: h=28px · padding-x 12px · font caption · radius calc(lg-1px)
─── md ─── item: h=36px · padding-x 16px · font body · radius calc(xl-2px)

item default  : text text-secondary · transparent fill
item hover    : text text · fill surface-raised
item active
  fill    : color/input-bg (#162233) · shadow sm
  primary : text primary · border 1px primary/25%
  accent  : text accent · border 1px accent/25%
  secondary : text secondary · border 1px secondary/25%
  @animated seg-active-in (scale 0.96→1, spring, normal)
item disabled : opacity 0.4
```

### Stepper

```
Selector Angular : k10-stepper
orientation      : horizontal | vertical

─── node ─── 32×32px · radius full
  default   : border 2px border · fill surface · text text-muted
  active    : border primary · fill primary-subtle · text primary · shadow primary-glow
  completed : border primary · fill primary · text primary-text
  error     : border danger · fill danger-subtle · text danger

─── connector ─── h=2px (horizontal) · w=2px (vertical) · fill border · radius full
  completed step connector : fill primary

─── content ─── flex col · gap 2px (vertical mode only)
  label    : body (15px/500/text-secondary) · active: text/semibold
  sublabel : caption (10px/text-muted)

spacing between steps (horizontal) : flex: 1 + connector
spacing between steps (vertical)   : padding-bottom 16px per step
```

### Stepper Control

```
Selector Angular : k10-stepper-control
colorRole        : default | accent
height           : 40px · radius full · overflow hidden
border           : 1px solid color/input-border
  accent mode    : border color/accent

─── buttons ─── 40×40px · fill surface · color primary
  accent mode : color accent
  hover : fill surface-raised
  active : fill surface-elevated
  dimmed (min/max reached) : color text-muted · cursor not-allowed

─── value ─── 52×40px · fill surface · font body (15px/700/text)
  border-left/right : 1px input-border
  accent mode : border-color accent
```

### FormField

```
Selector Angular : k10-form-field
layout           : flex col · gap 8px · full width

label  : label (11px/700/uppercase/0.06em) · text-muted
         * required → suffix " *" in text danger

error  : caption (10px/400) · text danger
help   : caption (10px/400) · text-muted
```

### ChartCard

```
Selector Angular : k10-chart-card
fill             : color/surface
border           : 1px solid color/border
radius           : md (8px)
padding          : 24px · tous côtés
gap              : 24px entre header et chart

─── header ─── flex row · space-between · align-items flex-start · gap 12px

─── meta (gauche) ───
  layout : flex column · gap 2px
  title  : label (11px/700/uppercase/0.06em/text-secondary)
  value  : data-md (22px/700/-0.01em/text)
  unit   : caption (10px · text-secondary)

─── live-badge (droite) ───
  padding   : 4px 8px
  radius    : md (8px)
  fill      : color/accent-subtle
  border    : 1px solid color/accent
  text      : caption (10px/700/0.04em/color/accent)
  dot       : 5×5px · radius full · currentColor | @animated dot-breathe 2.5s

─── chart area ─── height 128px · width 100%

─── live state ───
  border     → transparent
  ::before   → conic-gradient(accent+primary) spin 5s | @live
  box-shadow → pulse 0–28% opacity 2.5s | @animated
```

### MetricCard

```
Selector Angular : k10-metric-card
fill             : color/surface
border           : 1px solid color/border
radius           : md (8px)
padding          : 24px
gap              : 16px

─── header row ─── flex · space-between · align-center
label             : label (11px/700/uppercase/0.06em) · text-secondary

trend badge
  up   → fill primary-subtle · text primary · padding 2px/8px · radius full · caption
  down → fill danger-subtle  · text danger  · caption (10px/700/0.04em)

─── value row ─── flex · align-baseline · gap 8px
value             : data-lg (28px/36px · 700) · text · letter-spacing -0.02em
unit              : body (15px/500) · text-secondary · uppercase

─── progress bar ───
track             : h=4px · radius full · fill surface-elevated
fill              : h=4px · radius full · fill primary · shadow primary-glow
```

### Badge

```
Selector Angular : k10-badge
height           : 28px
padding-x        : 12px
radius           : full
border           : 1px solid (couleur du variant)
font             : caption (10px/700/0.04em)
dot              : 6×6px · radius full · currentColor

success → fill success-hover · border success  · text success
warning → fill warning-hover · border warning  · text warning
error   → fill danger-hover  · border danger   · text danger
neutral → fill neutral-hover · border neutral  · text neutral
info    → fill info-hover    · border info     · text info
```

### Avatar

```
Selector Angular : k10-avatar
radius sm        : md (8px)   · size 40×40px
radius md        : xl (16px)  · size 64×64px
radius lg        : xl (16px)  · size 80×80px

border           : 1px solid color/border
fill             : color/surface-raised

initials
  font  : body (15px/700) · uppercase · letter-spacing 0.05em · text

with-text layout : flex row · align-center · gap 12px
name             : body (15px/500) · text
subtitle         : caption (10px) · text-muted
```

### Topbar

```
Selector Angular : k10-topbar
height           : 56px (shell/topbar-height)
fill             : color/surface  (hook : --k10-topbar-bg)
border-bottom    : 1px solid color/border (hook : --k10-topbar-border)
padding-x        : 16px

layout           : flex · space-between · align-center · gap 8px
start slot       : flex · align-center · gap 8px · min-width 40px
center slot      : flex 1 · align-center · justify-center · overflow hidden
end slot         : flex · align-center · justify-end · gap 8px · min-width 40px
```

### NavItem — bottom

```
Selector Angular : k10-nav-item [variant="bottom"]
height           : 48px (shell/bottom-nav-height)
padding-x        : 24px
radius           : md (8px)
layout           : flex column · align-center · justify-center
icon             : 20×20px
label            : caché (icon-only dock)

default → text color/text-muted
hover   → text color/text-secondary
active  → fill primary-subtle · text color/primary · shadow primary-glow | @spring 300ms
```

### NavItem — side

```
Selector Angular : k10-nav-item [variant="side"]
width            : 100%
padding          : 8px 16px
radius           : md (8px)
layout           : flex row · align-center · justify-start · gap 12px
icon             : 24×24px
label            : body (15px/500)

default → text color/text-muted
hover   → fill neutral-hover · text text-secondary
active  → fill primary-subtle · text primary · shadow primary-glow | @spring 300ms
```

### Alert

```
Selector Angular : k10-alert
layout           : flex row · align-items flex-start · gap 16px
padding          : 24px · tous côtés
radius           : xl (16px)
border           : 1px solid (couleur du variant)

─── icon-wrap ─── 48×48px · radius lg (12px) · flex center
─── body ─── flex col · gap 8px
  title       : body (15px/600) · couleur du variant
  description : body (15px/400) · text-secondary

─── info ───
  fill      : color/surface
  border    : color/border
  icon-wrap : fill info-hover · color info

─── success ───
  fill      : color/success-subtle
  border    : color/success
  icon-wrap : fill success · color success-text
  title     : color/success

─── warning ───
  fill      : color/warning-subtle
  border    : color/warning
  icon-wrap : fill warning · color warning-text
  title     : color/warning

─── error ───
  fill      : color/danger-subtle
  border    : color/danger
  icon-wrap : fill danger · color danger-text
  title     : color/danger

dismiss button : color text-muted · hover text · transition fast
```

### Card

```
Selector Angular : k10-card
fill             : color/surface
radius           : xl (16px)
border           : 1px solid color/border (--border=true)
overflow         : hidden

─── elevation variants ───
  none : shadow none
  sm   : shadow sm
  md   : shadow md
  lg   : shadow lg

─── padding variants ───
  none : 0
  sm   : 8px
  md   : 16px
  lg   : 24px

─── header ─── padding 16px · border-bottom 1px border · h3 (16px/700/text)
─── body ─── padding 16px par défaut
─── footer ─── padding 12px 16px · border-top 1px · fill surface-raised

─── interactive ───
  cursor pointer · hover translateY(-2px) + shadow-lg · transition normal/standard

─── live ─── @live @animated
  border transparent · ::before conic-gradient(accent+primary) spin 5s ·
  box-shadow pulse 10%→28% opacity 2.5s ease-in-out
```

### Live Indicator

```
Selector Angular : k10-live-indicator
Variants         : accent | danger | success | warning
Modes            : pill (default) | inline
Sizes            : sm | md | lg

─── pill sm ─── h=20px · padding-x 8px · font 9px/700/0.08em · radius full
─── pill md ─── h=24px · padding-x 12px · font 10px/700/0.08em · radius full
─── pill lg ─── h=28px · padding-x 12px · font 11px/700/0.08em · radius full

─── pill modes (fill + border) ───
  accent  : fill rgba(accent,0.15) · border rgba(accent,0.30) · text accent
  danger  : fill danger-subtle · border rgba(danger,0.30) · text danger
  success : fill success-subtle · border rgba(success,0.30) · text success
  warning : fill warning-subtle · border rgba(warning,0.30) · text warning

─── inline mode ─── transparent · no border · text only

─── dot ─── 5–7px · radius full · currentColor
  @animated pulse : opacity 1→0.5 + scale 1→0.85 · 1.4s · standard · @infinite
```

### Notification Dot

```
Selector Angular : k10-notification-dot
Variants         : danger | primary | accent | warning | success
border           : 1.5px solid color/bg (knockout)

─── sizes ───
  xs : 6×6px · no count · font 0
  sm : 8×8px · no count · font 0
  md : 16×16px · font 9px/700 · with-count: min-w 18px · h 18px

text always : color/bg-deep (dark on light pill)

─── @animated pulse ─── ring expand → transparent · 2s ease-in-out @infinite
```

### Divider

```
Selector Angular : k10-divider

─── simple ───  1px height · fill color/border

─── labeled ───
  flex row · gap 12px
  two half-lines flanking label
  label : caption (10px/400/text-muted/uppercase/0.04em)

─── progress ───
  flex row · gap 4px · dots h=6px · radius full
  active dot  : w=48px · fill primary
  inactive dot: w=12px · fill surface-elevated
```

### Dropdown

```
Selector Angular : k10-dropdown

─── trigger ─── h=40px · padding 0 16px · radius xl
  border   : 1px solid border · fill surface
  font     : body (15px/500)
  hover    : fill surface-raised · border accent
  open     : border accent · shadow accent-focus
  arrow    : 16px icon · text-muted · rotate 180° on open

─── menu ─── fill surface-raised · radius xl · border 1px border · shadow-lg
  padding  : 4px · flex col · gap 2px
  offset   : top calc(100% + 4px)
  entrance : @animated dropdown-in (opacity 0→1 + translateY -4px→0) · decelerate · fast

─── item ─── h=40px · padding 0 12px · radius lg · body (15px/text)
  hover    : fill surface-elevated
  danger   : text danger · hover fill danger-subtle
  disabled : opacity 0.4
```

### EmptyState

```
Selector Angular : k10-empty-state
layout           : flex col · align-center · justify-center · text-center · gap 12px

─── sm ─── padding 24px · icon 40×40px · title body (15px/600/text)
─── md ─── padding 48px · icon 64×64px · title h2 (20px/600/text)
─── lg ─── padding 64px · icon 80×80px · title h2 (20px/600/text)

description     : body (15px/400/text-secondary) · max-width 360px
icon color      : text-muted · stroke currentColor · icon-wrap radius/lg

─── action button ─── margin-top 8px
  h=48px · padding 0 24px · radius xl · border 1px border
  fill transparent · font body (15px/500) · text primary
  hover : fill primary-hover · border primary
```

### ListItem

```
Selector Angular : k10-list-item
padding          : 16px · tous côtés
radius           : md (8px)
fill             : color/surface
border           : 1px solid color/border
layout           : flex row · space-between · align-center · gap 16px

─── left ─── flex row · gap 16px · flex 1
  icon  : 20×20px · text-secondary
  text  : flex col · gap 2px
    label    : body (15px/700/text) · ellipsis
    sublabel : caption (10px/400/text-muted) · ellipsis

─── right ───
  value   : caption (10px/700/text-secondary)
  chevron : 12px · text-muted

─── navigation variant ─── cursor pointer · hover fill surface-raised · focus shadow-focus
─── status-error variant ─── icon text danger · label text danger
─── skeleton variant ─── k10-skeleton placeholders
```

### Modal

```
Selector Angular : k10-modal

─── backdrop ─── fixed inset 0 · z=z-modal (50) · bg rgba(0,0,0,0.60) · backdrop-filter blur(4px)
  @animated modal-backdrop-in (opacity 0→1) · standard · normal

─── panel ─── fill surface · radius xl (16px) · border 1px border · shadow-xl
  @animated modal-panel-in (opacity 0→1 + translateY 12px + scale 0.97→1) · spring · normal

─── sizes ───
  sm : max-width 400px
  md : max-width 560px
  lg : max-width 760px

─── header ─── padding 24px 24px 0 · gap 16px · flex row · space-between
  title : h2 (20px/600/text)
  close : radius md · hover fill surface-raised · color text-muted→text

─── body ─── padding 24px
```

### Progress

```
Selector Angular : k10-progress
layout           : flex col · gap 8px · full width

─── track ─── h=4px · radius full · fill surface-elevated
─── fill  ─── h=4px · radius full · fill primary · shadow primary-glow
  transition width slow (300ms) standard

label : caption (10px/400/text-muted) · right-aligned
```

### SideNav

```
Selector Angular : k10-side-nav
width            : 240px (shell/sidenav-width)
height           : 100%
fill             : color/surface
border-right     : 1px solid color/border
overflow-y       : auto

─── header ─── padding 16px · border-bottom 1px · min-height 56px
─── items ─── padding 8px · gap 4px · flex col · flex 1
─── footer ─── padding 16px · border-top 1px (hidden if empty)
```

### Skeleton

```
Selector Angular : k10-skeleton
animation        : shimmer 1.5s linear @infinite
  gradient : surface (25%) → surface-raised (50%) → surface (75%) · width 800px

─── circle    ─── 48×48px · radius full
─── rectangle ─── full width · h=24px · radius sm (4px)
─── text      ─── full width · h=16px · radius sm (4px)

width / height overridable via inputs
```

### Spinner

```
Selector Angular : k10-spinner
animation        : rotate 360° · 0.8s linear @infinite

─── sizes ───
  sm : 20×20px · border 2px
  md : 40×40px · border 3px
  lg : 56×56px · border 4px

─── variants ───
  primary   : piste color/border · arc color/primary
  secondary : piste color/border · arc color/secondary
  white     : piste rgba(255,255,255,0.20) · arc #ffffff

label : body (15px/400) · text-secondary
```

### Tabs

```
Selector Angular : k10-tabs
container        : flex row · gap 4px · padding 4px
fill             : color/surface · radius xl (16px) · border 1px border

─── tab ─── flex 1 · h=40px · padding 0 16px · radius lg (12px) · body (15px/500)
  default  : text-secondary
  hover    : text · fill surface-raised · transition fast
  active   : fill surface-elevated · text · semibold (600) · shadow-sm
  disabled : opacity 0.4
```

### Toast

```
Selector Angular : k10-toast
position         : fixed · z=z-toast (60)
layout           : flex row · align-center · gap 12px
padding          : 12px 16px
radius           : xl (16px) · border 1px · shadow-lg
min-width        : 280px · max-width 480px
@animated        : toast-in (opacity 0→1 + translateY 8px→0) · spring · normal

─── variants ───
  info    : fill surface-raised · border border-color · text text
  success : fill success-subtle · border success  · text success
  warning : fill warning-subtle · border warning  · text warning
  error   : fill danger-subtle  · border danger   · text danger

─── positions ─── offset 24px from edge
  top-right / top-left / bottom-right / bottom-left

message : body (15px/400) · color inherit
close   : opacity 0.6 → 1 on hover
```

### Tooltip

```
Selector Angular : k10-tooltip
bubble           : fill surface-elevated · border 1px border · radius md (8px) · shadow-md
padding          : 4px 8px
font             : caption (10px/400/text) · white-space nowrap
show             : on hover / focus-within · opacity 0→1 · fast standard
offset           : 4px from trigger

─── positions ───
  top    : bottom calc(100% + 4px) · translate-X -50% · slide-in +4px Y
  bottom : top   calc(100% + 4px) · translate-X -50% · slide-in -4px Y
  left   : right calc(100% + 4px) · translate-Y -50% · slide-in +4px X
  right  : left  calc(100% + 4px) · translate-Y -50% · slide-in -4px X
```

### AppShell

```
Selector Angular : k10-app-shell
layout           : CSS grid · rows (auto 1fr) · min-height 100dvh · fill bg

─── topbar area ─── sticky top 0 · z-topbar
  mobile (<768px) : position fixed · bg transparent · border transparent
                    hide on scroll : translateY(-100%) + opacity 0 | @animated slow/standard
  desktop (≥768px): sticky (défaut)

─── body area ─── flex row · overflow hidden
  sidenav : hidden mobile · visible desktop
  main    : flex 1 · overflow-y auto
    mobile  : padding 16px · padding-top (topbar-height + safe-area + sm)
              padding-bottom (bottom-nav + xl + safe-area)
    desktop : padding 24px

─── bottom nav ─── visible mobile · hidden desktop

(aucun input — composant structurel pur)
```

### BottomNav

```
Selector Angular : k10-bottom-nav
position         : fixed · bottom (spacing/xxl + safe-area-inset-bottom) · centered
width            : fit-content · z-nav
height           : 48px (shell/bottom-nav-height)
radius           : xl (16px)
Glassmorphism    : fill var(--k10-glass-raised-bg) · backdrop-filter blur(20px)
border           : 1px var(--k10-glass-border)
shadow           : shadow-xl
overflow         : hidden

items container  : flex row · align-center · full width · height bottom-nav-height
(items : k10-nav-item variant="bottom")
```

### Map

```
Selector Angular : k10-map
display          : block · width 100%

─── wrapper ─── overflow hidden · radius héritée du conteneur (k10-card padding="none")

─── skeleton ─── fill surface · animation skeleton-pulse 1.5s · affiché pendant loading

─── info-window ─── font-family k10 · padding sm/md
  close : 20×20px · radius sm · text-muted → text
  title : body (15px/700/text)
  content : label (11px/400/text-secondary)
```

---

## Convention de nommage — Components Figma

Format strict : `composant/variant/état`

```
button/primary/default
button/primary/hover
button/primary/active
button/primary/disabled
button/secondary/default
button/secondary/hover
button/ghost/default
button/danger/default

tag/default/sm
tag/primary/sm
tag/accent/sm
tag/default/md
tag/primary/md

fab/primary/md
fab/accent/md
fab/secondary/md
fab/ghost/md
fab/primary/sm
fab/primary/lg
fab/extended/primary/md

input/default
input/filled
input/focus
input/error
input/success
input/disabled

search/sm/default
search/md/default
search/md/focus
search/lg/default

select/default
select/open
select/disabled
select/error

segmented/primary/default
segmented/accent/default
segmented/primary/sm

stepper/horizontal/default
stepper/vertical/default

stepper-control/default
stepper-control/accent
stepper-control/disabled

chart-card/populated/default
chart-card/populated/live
chart-card/skeleton
chart-card/empty

metric-card/active
metric-card/loading
metric-card/empty

badge/success
badge/warning
badge/error
badge/neutral
badge/info

live-indicator/accent/pill/md
live-indicator/danger/pill/md
live-indicator/success/pill/md
live-indicator/warning/pill/sm
live-indicator/accent/inline/md

notification-dot/danger/xs
notification-dot/danger/sm
notification-dot/danger/md
notification-dot/primary/md
notification-dot/accent/md

avatar/image/sm
avatar/image/md
avatar/image/lg
avatar/initials/sm
avatar/with-text/md

nav-item/bottom/default
nav-item/bottom/active
nav-item/side/default
nav-item/side/active
nav-item/side/hover

topbar/default

alert/info/default
alert/success/default
alert/warning/default
alert/error/default
alert/info/dismissible
alert/success/dismissible
alert/warning/dismissible
alert/error/dismissible

card/default
card/interactive/default
card/interactive/hover
card/live/default
card/no-border

checkbox/unchecked/default
checkbox/checked/default
checkbox/indeterminate/default
checkbox/unchecked/hover
checkbox/checked/hover
checkbox/unchecked/disabled
checkbox/checked/disabled

divider/simple
divider/labeled
divider/progress

dropdown/default
dropdown/open
dropdown/disabled
dropdown/item/default
dropdown/item/hover
dropdown/item/danger
dropdown/item/disabled

empty-state/sm
empty-state/md
empty-state/lg

form-field/default
form-field/required
form-field/error
form-field/with-help

list-item/toggle/off
list-item/toggle/on
list-item/navigation/default
list-item/navigation/hover
list-item/text-value/default
list-item/status-error/default
list-item/skeleton

modal/sm/default
modal/md/default
modal/lg/default

progress/default
progress/with-label

radio/unchecked/default
radio/checked/default
radio/unchecked/hover
radio/checked/hover
radio/unchecked/disabled
radio/checked/disabled

side-nav/default

skeleton/rectangle
skeleton/circle
skeleton/text

slider/default
slider/disabled

spinner/sm/primary
spinner/md/primary
spinner/lg/primary
spinner/sm/secondary
spinner/md/secondary
spinner/sm/white
spinner/md/white

tabs/default
tabs/with-active

toast/info/bottom-right
toast/success/bottom-right
toast/warning/bottom-right
toast/error/bottom-right

toggle/off/default
toggle/on/default
toggle/off/disabled
toggle/on/disabled

tooltip/top
tooltip/bottom
tooltip/left
tooltip/right

app-shell/mobile
app-shell/desktop

bottom-nav/default

map/default
map/loading
```

**Règle** : kebab-case strict. Le nom du composant Figma correspond au sélecteur Angular (`k10-[composant]`) et au modificateur BEM (`.composant--[variant]`).

---

## Figma Component Properties — correspondance inputs Angular

Chaque composant Figma expose des **Component Properties** qui matchent les `input()` Angular.

```
button
  variant  : Variant (select) → primary | secondary | ghost | danger
  size     : Size (select) → sm | md | lg
  disabled : Boolean → false
  label    : Text → "Button"

tag
  variant  : Variant → default | primary | accent | success | warning | danger | info
  size     : Size → sm | md
  removable : Boolean → false
  label    : Text → "Label"

fab
  variant  : Variant → primary | accent | secondary | ghost
  size     : Size → sm | md | lg
  extended : Boolean → false
  label    : Text → "Action"
  disabled : Boolean → false

input
  state    : Variant → default | filled | focus | error | success | disabled
  placeholder : Text → "Placeholder"
  hasIcon  : Boolean → false

search
  size     : Size → sm | md | lg
  placeholder : Text → "Rechercher…"
  disabled : Boolean → false

select
  label       : Text → "Sélectionnez"
  placeholder : Text → "Choisir…"
  disabled    : Boolean → false
  hasError    : Boolean → false

checkbox
  checked       : Boolean → false
  disabled      : Boolean → false
  indeterminate : Boolean → false
  label         : Text → "Label"

radio
  checked  : Boolean → false
  disabled : Boolean → false
  label    : Text → "Option"
  value    : Text → "option"

toggle
  checked  : Boolean → false
  disabled : Boolean → false
  label    : Text → "Activer"

slider
  value    : Number → 50
  min      : Number → 0
  max      : Number → 100
  step     : Number → 1
  disabled : Boolean → false
  label    : Text → "Volume"

segmented
  items    : Text → "Option 1,Option 2,Option 3"
  active   : Text → "Option 1"
  colorRole : Variant → primary | accent | secondary
  size     : Size → sm | md
  disabled : Boolean → false

stepper
  steps       : Text → "Étape 1,Étape 2,Étape 3"
  activeStep  : Number → 1
  orientation : Variant → horizontal | vertical

stepper-control
  value    : Number → 1
  min      : Number → 0
  max      : Number → 10
  step     : Number → 1
  disabled : Boolean → false
  colorRole : Variant → default | accent

form-field
  label        : Text → "Champ"
  required     : Boolean → false
  errorMessage : Text → ""
  helpText     : Text → ""

chart-card
  variant  : Variant → populated | skeleton | empty
  isLive   : Boolean → false
  title    : Text → "Heart Rate"
  value    : Text → "72"
  unit     : Text → "BPM"

metric-card
  variant  : Variant → active | loading | empty
  label    : Text → "Distance"
  value    : Text → "8.4"
  unit     : Text → "KM"
  trend    : Variant → up | down | none

badge
  variant  : Variant → success | warning | error | neutral | info
  label    : Text → "Online"
  hasDot   : Boolean → true

live-indicator
  variant  : Variant → accent | danger | success | warning
  mode     : Variant → pill | inline
  size     : Size → sm | md | lg
  pulse    : Boolean → true
  label    : Text → "LIVE"

notification-dot
  variant  : Variant → danger | primary | accent | warning | success
  size     : Size → xs | sm | md
  pulse    : Boolean → false
  count    : Number → 0

avatar
  size     : Size → sm | md | lg
  src      : Text → ""
  initials : Text → "AB"

nav-item
  variant  : Variant → bottom | side
  active   : Boolean → false
  label    : Text → "Home"
  hasBadge : Boolean → false

alert
  variant     : Variant → info | success | warning | error
  dismissible : Boolean → false
  visible     : Boolean → true

card
  padding     : Variant → none | sm | md | lg
  elevation   : Variant → none | sm | md | lg
  border      : Boolean → true
  interactive : Boolean → false
  isLive      : Boolean → false

divider
  variant : Variant → simple | labeled | progress
  label   : Text → "ou"

dropdown
  label    : Text → "Options"
  disabled : Boolean → false

empty-state
  size        : Variant → sm | md | lg
  title       : Text → "Aucun résultat"
  description : Text → "Modifiez vos critères de recherche."
  actionLabel : Text → "Réessayer"

list-item
  variant  : Variant → toggle | navigation | text-value | skeleton | status-error
  icon     : Text → "fa-solid fa-wifi"
  label    : Text → "Label"
  sublabel : Text → "Sublabel"
  value    : Text → "Valeur"
  checked  : Boolean → false

modal
  size  : Variant → sm | md | lg
  title : Text → "Titre"

progress
  value     : Number → 60
  size      : Variant → sm | md | lg
  showLabel : Boolean → true

skeleton
  shape  : Variant → rectangle | circle | text
  width  : Text → "100%"
  height : Text → "24px"
  count  : Number → 1

spinner
  size    : Variant → sm | md | lg
  variant : Variant → primary | secondary | white
  label   : Text → ""

tabs
  activeTab : Text → "tab1"

toast
  variant    : Variant → info | success | warning | error
  position   : Variant → top-right | top-left | bottom-right | bottom-left
  message    : Text → "Opération réussie."
  visible    : Boolean → true
  duration   : Number → 0
  dismissible: Boolean → true

tooltip
  position : Variant → top | bottom | left | right
  content  : Text → "Info contextuelle"
  disabled : Boolean → false

map
  height   : Text → "400px"
  loading  : Boolean → false
```

---

## Description field — métadonnées machine-readable

Chaque composant Figma porte dans son champ **Description** le bloc suivant :

```
selector: k10-[composant]
status: stable | beta | deprecated
tokens: --k10-[token1], --k10-[token2]
storybook: /story/design-system-components-[composant]--default
inputs: [input1, input2, ...]
```

Exemples :

```
--- button ---
selector: k10-button
status: stable
tokens: --k10-color-primary, --k10-radius-xl, --k10-font-size-h3
storybook: /story/design-system-components-button--default
inputs: variant, size, disabled, fullWidth, isLoading

--- tag ---
selector: k10-tag
status: stable
tokens: --k10-color-primary-subtle, --k10-radius-full, --k10-font-size-caption
storybook: /story/design-system-components-tag--default
inputs: variant, size, removable, label

--- fab ---
selector: k10-fab
status: stable
tokens: --k10-color-primary, --k10-color-accent, --k10-radius-xl, --k10-shadow-md
storybook: /story/design-system-components-fab--default
inputs: variant, size, extended, label, disabled

--- input ---
selector: k10-input
status: stable
tokens: --k10-color-input-bg, --k10-color-accent, --k10-radius-xl, --k10-shadow-focus
storybook: /story/design-system-components-input--default
inputs: placeholder, disabled, hasIcon, state

--- search ---
selector: k10-search
status: stable
tokens: --k10-color-surface, --k10-color-accent, --k10-radius-full, --k10-color-accent-focus
storybook: /story/design-system-components-search--default
inputs: size, placeholder, disabled

--- select ---
selector: k10-select
status: stable
tokens: --k10-color-input-bg, --k10-color-accent, --k10-radius-xl, --k10-shadow-lg
storybook: /story/design-system-components-select--default
inputs: options, label, placeholder, disabled, hasError

--- segmented ---
selector: k10-segmented
status: stable
tokens: --k10-color-surface, --k10-radius-xl, --k10-color-primary, --k10-color-accent
storybook: /story/design-system-components-segmented--default
inputs: items, active, colorRole, size, disabled

--- stepper ---
selector: k10-stepper
status: stable
tokens: --k10-color-primary, --k10-radius-full, --k10-shadow-primary-glow
storybook: /story/design-system-components-stepper--default
inputs: steps, activeStep, orientation

--- stepper-control ---
selector: k10-stepper-control
status: stable
tokens: --k10-color-primary, --k10-color-accent, --k10-color-input-border, --k10-radius-full
storybook: /story/design-system-components-steppercontrol--default
inputs: value, min, max, step, disabled, colorRole

--- chart-card ---
selector: k10-chart-card
status: stable
tokens: --k10-color-surface, --k10-radius-md, --k10-space-xl, --k10-color-accent
storybook: /story/design-system-components-chartcard--default
inputs: isLive, variant, value, unit, label

--- metric-card ---
selector: k10-metric-card
status: stable
tokens: --k10-color-surface, --k10-radius-md, --k10-font-size-data-lg, --k10-color-primary
storybook: /story/design-system-components-metriccard--default
inputs: variant, label, value, unit, trend

--- live-indicator ---
selector: k10-live-indicator
status: stable
tokens: --k10-color-accent, --k10-radius-full, --k10-easing-standard
storybook: /story/design-system-components-liveindicator--default
inputs: variant, mode, size, pulse, label

--- notification-dot ---
selector: k10-notification-dot
status: stable
tokens: --k10-color-danger, --k10-color-primary, --k10-color-accent, --k10-radius-full
storybook: /story/design-system-components-notificationdot--default
inputs: variant, size, pulse, count

--- alert ---
selector: k10-alert
status: stable
tokens: --k10-color-success-subtle, --k10-color-danger-subtle, --k10-radius-xl, --k10-space-xl
storybook: /story/design-system-components-alert--default
inputs: variant, dismissible, visible

--- card ---
selector: k10-card
status: stable
tokens: --k10-color-surface, --k10-radius-xl, --k10-color-border, --k10-shadow-lg
storybook: /story/design-system-components-card--default
inputs: padding, elevation, border, interactive, isLive

--- checkbox ---
selector: k10-checkbox
status: stable
tokens: --k10-color-primary, --k10-radius-sm, --k10-shadow-focus, --k10-easing-spring
storybook: /story/design-system-components-checkbox--default
inputs: checked, disabled, indeterminate, label

--- divider ---
selector: k10-divider
status: stable
tokens: --k10-color-border, --k10-color-primary, --k10-font-size-caption
storybook: /story/design-system-components-divider--default
inputs: variant, label

--- dropdown ---
selector: k10-dropdown
status: stable
tokens: --k10-color-surface, --k10-radius-xl, --k10-color-accent, --k10-shadow-lg
storybook: /story/design-system-components-dropdown--default
inputs: label, items, disabled

--- empty-state ---
selector: k10-empty-state
status: stable
tokens: --k10-color-text-muted, --k10-radius-xl, --k10-color-primary, --k10-space-xxxl
storybook: /story/design-system-components-emptystate--default
inputs: size, title, description, actionLabel

--- form-field ---
selector: k10-form-field
status: stable
tokens: --k10-font-size-label, --k10-color-text-muted, --k10-color-danger
storybook: /story/design-system-components-formfield--default
inputs: label, required, errorMessage, helpText

--- list-item ---
selector: k10-list-item
status: stable
tokens: --k10-color-surface, --k10-radius-md, --k10-space-lg, --k10-color-danger
storybook: /story/design-system-components-listitem--default
inputs: data

--- modal ---
selector: k10-modal
status: stable
tokens: --k10-color-surface, --k10-radius-xl, --k10-shadow-xl, --k10-easing-spring
storybook: /story/design-system-components-modal--default
inputs: isOpen, size, title

--- progress ---
selector: k10-progress
status: stable
tokens: --k10-color-primary, --k10-radius-full, --k10-shadow-primary-glow
storybook: /story/design-system-components-progress--default
inputs: value, size, showLabel, label

--- radio ---
selector: k10-radio
status: stable
tokens: --k10-color-primary, --k10-radius-full, --k10-shadow-focus, --k10-easing-spring
storybook: /story/design-system-components-radio--default
inputs: checked, disabled, value, label

--- badge ---
selector: k10-badge
status: stable
tokens: --k10-color-success, --k10-color-danger, --k10-color-warning, --k10-radius-full
storybook: /story/design-system-components-badge--default
inputs: variant, label, hasDot

--- avatar ---
selector: k10-avatar
status: stable
tokens: --k10-color-surface-raised, --k10-radius-xl, --k10-color-border
storybook: /story/design-system-components-avatar--default
inputs: size, src, initials

--- nav-item ---
selector: k10-nav-item
status: stable
tokens: --k10-color-primary-subtle, --k10-radius-md, --k10-shadow-primary-glow, --k10-easing-spring
storybook: /story/design-system-components-navitem--default
inputs: variant, active, label, hasBadge

--- topbar ---
selector: k10-topbar
status: stable
tokens: --k10-color-surface, --k10-color-border, --k10-topbar-height
storybook: /story/design-system-shell-topbar--default
inputs: (slot-based)

--- side-nav ---
selector: k10-side-nav
status: stable
tokens: --k10-color-surface, --k10-color-border, --k10-sidenav-width, --k10-topbar-height
storybook: /story/design-system-shell-sidenav--default
inputs: (structural — items via ng-content)

--- bottom-nav ---
selector: k10-bottom-nav
status: stable
tokens: --k10-glass-raised-bg, --k10-glass-border, --k10-radius-xl, --k10-shadow-xl
storybook: /story/design-system-shell-bottomnav--default
inputs: items

--- app-shell ---
selector: k10-app-shell
status: stable
tokens: --k10-color-bg, --k10-topbar-height, --k10-bottom-nav-height, --k10-sidenav-width
storybook: /story/design-system-shell-appshell--default
inputs: (structural)

--- skeleton ---
selector: k10-skeleton
status: stable
tokens: --k10-color-surface, --k10-color-surface-raised, --k10-radius-sm, --k10-radius-full
storybook: /story/design-system-components-skeleton--default
inputs: shape, width, height, count

--- slider ---
selector: k10-slider
status: stable
tokens: --k10-color-primary, --k10-color-surface-elevated, --k10-shadow-focus
storybook: /story/design-system-components-slider--default
inputs: value, min, max, step, disabled, label

--- spinner ---
selector: k10-spinner
status: stable
tokens: --k10-color-primary, --k10-color-border, --k10-color-secondary
storybook: /story/design-system-components-spinner--default
inputs: size, variant, label

--- tabs ---
selector: k10-tabs
status: stable
tokens: --k10-color-surface, --k10-radius-xl, --k10-color-surface-elevated, --k10-shadow-sm
storybook: /story/design-system-components-tabs--default
inputs: tabs, activeTab

--- toast ---
selector: k10-toast
status: stable
tokens: --k10-color-success-subtle, --k10-color-danger-subtle, --k10-radius-xl, --k10-shadow-lg
storybook: /story/design-system-components-toast--default
inputs: variant, position, message, visible, duration, dismissible

--- toggle ---
selector: k10-toggle
status: stable
tokens: --k10-color-primary, --k10-radius-full, --k10-shadow-primary-glow, --k10-easing-spring
storybook: /story/design-system-components-toggle--default
inputs: checked, disabled, label

--- tooltip ---
selector: k10-tooltip
status: stable
tokens: --k10-color-surface-elevated, --k10-radius-md, --k10-shadow-md, --k10-font-size-caption
storybook: /story/design-system-components-tooltip--default
inputs: position, content, disabled

--- map ---
selector: k10-map
status: stable
tokens: --k10-color-surface, --k10-font-family, --k10-font-size-body, --k10-color-text
storybook: /story/design-system-special-map--default
inputs: height, loading
```

Claude lit ce bloc via l'API Figma (`node.description`) pour vérifier la cohérence code ↔ design.

---

## Page `_Status` — Dashboard de synchronisation

| Composant | Figma | Code | Storybook | Dernière sync | Notes |
|---|---|---|---|---|---|
| alert | ✅ stable | ✅ stable | ✅ | 2026-04 | Tokens sémantiques K-10 |
| app-shell | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| avatar | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| badge | ✅ stable | ✅ stable | ✅ | 2026-04 | Variants K-10 (info ajouté) |
| bottom-nav | ✅ stable | ✅ stable | ✅ | 2026-04 | Glassmorphism tokens K-10 |
| button | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| card | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| chart-card | ✅ stable | ✅ stable | ✅ | 2026-04 | Live badge → accent (teal) |
| checkbox | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| divider | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| dropdown | ✅ stable | ✅ stable | ✅ | 2026-04 | Focus → accent |
| empty-state | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| fab | 🔄 beta | ✅ stable | ✅ | 2026-04 | Nouveau K-10 |
| form-field | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| input | ✅ stable | ✅ stable | ✅ | 2026-04 | Focus → accent |
| list-item | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| live-indicator | 🔄 beta | ✅ stable | ✅ | 2026-04 | Nouveau K-10 |
| map | 🔄 beta | ✅ stable | ✅ | 2026-04 | Nouveau K-10 |
| metric-card | ✅ stable | ✅ stable | ✅ | 2026-04 | data-lg (28px) |
| modal | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| nav-item | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| notification-dot | 🔄 beta | ✅ stable | ✅ | 2026-04 | Nouveau K-10 |
| progress | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| radio | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| search | 🔄 beta | ✅ stable | ✅ | 2026-04 | Nouveau K-10 |
| segmented | 🔄 beta | ✅ stable | ✅ | 2026-04 | Nouveau K-10 |
| select | ✅ stable | ✅ stable | ✅ | 2026-04 | Focus → accent |
| side-nav | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| skeleton | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| slider | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| spinner | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| stepper | 🔄 beta | ✅ stable | ✅ | 2026-04 | Nouveau K-10 |
| stepper-control | 🔄 beta | ✅ stable | ✅ | 2026-04 | Nouveau K-10 |
| tabs | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| tag | 🔄 beta | ✅ stable | ✅ | 2026-04 | Nouveau K-10 |
| toast | ✅ stable | ✅ stable | ✅ | 2026-04 | Tokens sémantiques K-10 |
| toggle | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| tooltip | ✅ stable | ✅ stable | ✅ | 2026-04 | |
| topbar | ✅ stable | ✅ stable | ✅ | 2026-04 | |

**Statuts** :
- `✅ stable` — en production, spécifié et testé
- `🔄 beta` — en cours, peut changer
- `⚠️ drift` — divergence détectée entre Figma et code
- `❌ deprecated` — à ne plus utiliser

Claude peut annoter cette page automatiquement lors d'un audit.

---

## Page `Motion` — Specs d'animation

### Durées

| Token | Valeur | Usage |
|---|---|---|
| `duration/fast` | 120ms | Transitions UI légères (hover, color) |
| `duration/normal` | 200ms | Transitions standard |
| `duration/slow` | 300ms | Animations d'état, spring |
| `duration/slower` | 500ms | Entrées/sorties de modals |
| `duration/lazy` | 800ms | Animations de chargement |

### Easings

| Token | Courbe | Usage |
|---|---|---|
| `easing/standard` | `cubic-bezier(0.2, 0, 0, 1)` | Transitions UI courantes |
| `easing/accelerate` | `cubic-bezier(0.3, 0, 1, 1)` | Éléments qui quittent l'écran |
| `easing/decelerate` | `cubic-bezier(0, 0, 0, 1)` | Éléments qui entrent |
| `easing/spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | **Spring — micro-interactions** |

### Règles par type

| Type | Easing | Durée | Exemples |
|---|---|---|---|
| État on/off | `spring` | `slow` (300ms) | nav-item, toggle, checkbox, segmented |
| Transition UI | `standard` | `fast` (120ms) | hover, color change |
| Entrée élément | `decelerate` | `normal` (200ms) | toast, dropdown |
| Sortie élément | `accelerate` | `fast` (120ms) | toast dismiss |
| Live border | linear | 5000ms / infini | conic-gradient rotation |
| Pulse live | ease-in-out | 2500ms / infini | live-indicator dot, card pulse |
| Micro-pop | `spring` | `normal` (200ms) | checkbox check, segment active |

### Annotations dans Figma
- `@animated` → animation CSS présente
- `@live` → état temps réel (conic-gradient + pulse)
- `@spring` → easing-spring sur la transition
- `@infinite` → animation continue (jamais sur interaction utilisateur)

---

## Liens bidirectionnels Figma ↔ Storybook

### Dans Figma → Storybook (description field)
```
storybook: /story/design-system-components-[composant]--default
```

### Dans Storybook → Figma (parameters)
```typescript
parameters: {
  figmaUrl: 'https://www.figma.com/design/5MS7DIRcSDz7lYm0tjze7x?node-id=[NODE_ID]',
}
```

Les deux liens doivent être maintenus en sync. Lors d'un audit Claude :
1. Lit `figmaUrl` dans la story → fetch le node Figma → compare les specs
2. Lit `description.storybook` dans Figma → vérifie que la story existe

---

## Fichier Figma K-10 — Source de vérité

| Champ | Valeur |
|---|---|
| **fileKey** | `5MS7DIRcSDz7lYm0tjze7x` |
| **Pages** | `_Tokens` · `_Status` · `Typography` · `Colors` · `Foundations` · `Components` · `Patterns` · `Motion` · `Playground` |
| **Palette** | "Deep Ocean Dark" |
| **Sync** | avril 2026 |

---

## Accès MCP Figma

Le MCP officiel Figma est configuré dans `.mcp.json` à la racine du projet :

```json
{
  "mcpServers": {
    "figma": {
      "type": "http",
      "url": "https://mcp.figma.com/mcp"
    }
  }
}
```

**Authentification** : OAuth 2.0 via Figma. À la première utilisation, lancer `/mcp` dans Claude Code et s'authentifier.

**Outils disponibles** : `get_design_context`, `get_variable_defs`, `get_code_connect_map`, `get_screenshot`, `get_metadata`, `create_design_system_rules`, `get_figjam`, `generate_diagram`, `whoami`

**Fallback REST** : `FIGMA_API_KEY` dans `~/.claude/mcp.json` — utilisé si le MCP OAuth n'est pas disponible.

---

## Audit automatique par Claude

Lorsqu'un lien Figma est fourni, Claude exécute :

```
1. GET /v1/files/5MS7DIRcSDz7lYm0tjze7x/nodes?ids=[NODE_IDS]
   → Extraire : dimensions · padding · gap · radius · couleurs · typographie

2. Comparer avec le code CSS correspondant dans libs/ui/src/lib/components/

3. Comparer les Figma Variables avec libs/ui/src/lib/tokens/variables.css
   → Tout écart de valeur = drift à corriger

4. Vérifier les Component Properties Figma vs inputs Angular
   → Propriété Figma manquante = input non documenté côté design

5. Lire _Status → mettre à jour le statut du composant audité

6. Vérifier que les liens storybook/figmaUrl sont bidirectionnels
```

---

## Règles de contribution designer

1. **Ne jamais créer de valeur hors Variables** — toute couleur, taille, espacement doit référencer une Variable Figma. Zéro valeur hardcodée.
2. **Nommer selon la convention** `composant/variant/état` — kebab-case strict, pas d'espace.
3. **Renseigner le Description field** à chaque nouveau composant avant de partager.
4. **Mettre à jour `_Status`** après toute modification d'un composant existant.
5. **Annoter les layers animés** avec `@animated`, `@live`, `@spring`, `@infinite`.
6. **Proposer, ne pas décider** les écarts au design system — tout ajout de token passe par une PR code d'abord.
7. **Ne pas créer de token K-9** — tout le vocabulaire est `k10-*`. Le préfixe `k9-` est legacy et non synchronisé.

---

_v2.0 — K-10 "Deep Ocean Dark" — synchronisation Figma ↔ code — avril 2026_
