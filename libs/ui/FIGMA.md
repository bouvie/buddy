# K9 Pro — Convention Figma

> Source de vérité pour la synchronisation Figma ↔ code.
> Ce fichier est lu par Claude via l'API Figma pour vérifier, générer et auditer les composants.
> Toute divergence entre ce fichier et `tokens/variables.css` est un bug.

---

## Structure du fichier Figma

L'ordre des pages est normé — il conditionne la lisibilité depuis l'API.

```
📁 K9 Pro — Design System

  📄 _Tokens          ← Variables Figma (sync automatique avec variables.css)
  📄 _Status          ← Dashboard de synchronisation : état de chaque composant
  📄 Typography       ← Styles de texte + spécimens visuels
  📄 Colors           ← Palette + états (hover / pressed / subtle / focus)
  📄 Foundations      ← Spacing · Radius · Shadow · Motion
  📄 Components       ← Tous les composants (28) avec variantes + états
  📄 Patterns         ← Assemblages normés (dashboard, navigation, formulaires)
  📄 Motion           ← Courbes easing, durées, règles d'animation
  📄 Playground       ← Sandbox designer, non normé, non versionné
```

**Règle** : les pages préfixées `_` sont à usage machine/technique. Ne pas les réorganiser.

---

## Variables Figma — Collections

### Collection `Color`

| Variable Figma | Valeur | Token CSS |
|---|---|---|
| `color/bg` | `#0F1419` | `--k9-color-bg` |
| `color/surface` | `#1B2025` | `--k9-color-surface` |
| `color/surface-raised` | `#252A30` | `--k9-color-surface-raised` |
| `color/surface-elevated` | `#30353A` | `--k9-color-surface-elevated` |
| `color/surface-deep` | `#0A0F13` | `--k9-color-surface-deep` |
| `color/border` | `#434842` | `--k9-color-border` |
| `color/primary` | `#BACBB8` | `--k9-color-primary` |
| `color/primary-text` | `#263427` | `--k9-color-primary-text` |
| `color/primary-hover` | `rgba(186,203,184,0.10)` | `--k9-color-primary-hover` |
| `color/primary-pressed` | `rgba(186,203,184,0.20)` | `--k9-color-primary-pressed` |
| `color/primary-focus` | `rgba(186,203,184,0.35)` | `--k9-color-primary-focus` |
| `color/primary-subtle` | `rgba(186,203,184,0.05)` | `--k9-color-primary-subtle` |
| `color/secondary` | `#FFB5A1` | `--k9-color-secondary` |
| `color/secondary-text` | `#542112` | `--k9-color-secondary-text` |
| `color/secondary-hover` | `rgba(255,181,161,0.10)` | `--k9-color-secondary-hover` |
| `color/secondary-pressed` | `rgba(255,181,161,0.20)` | `--k9-color-secondary-pressed` |
| `color/secondary-focus` | `rgba(255,181,161,0.35)` | `--k9-color-secondary-focus` |
| `color/secondary-subtle` | `rgba(255,181,161,0.05)` | `--k9-color-secondary-subtle` |
| `color/danger` | `#FC8585` | `--k9-color-danger` |
| `color/danger-text` | `#5C0011` | `--k9-color-danger-text` |
| `color/danger-hover` | `rgba(252,133,133,0.10)` | `--k9-color-danger-hover` |
| `color/danger-pressed` | `rgba(252,133,133,0.20)` | `--k9-color-danger-pressed` |
| `color/danger-focus` | `rgba(252,133,133,0.35)` | `--k9-color-danger-focus` |
| `color/danger-subtle` | `rgba(252,133,133,0.05)` | `--k9-color-danger-subtle` |
| `color/neutral` | `#C4C8C0` | `--k9-color-neutral` |
| `color/neutral-text` | `#1A1D1A` | `--k9-color-neutral-text` |
| `color/neutral-hover` | `rgba(196,200,192,0.10)` | `--k9-color-neutral-hover` |
| `color/text` | `#DEE3E9` | `--k9-color-text` |
| `color/text-secondary` | `#C4C8C0` | `--k9-color-text-secondary` |
| `color/text-muted` | `#8E928B` | `--k9-color-text-muted` |
| `color/text-disabled` | `rgba(142,146,139,0.40)` | `--k9-color-text-disabled` |

### Collection `Spacing` — base 4px

| Variable | px | Token |
|---|---|---|
| `spacing/xs` | 4 | `--k9-space-xs` |
| `spacing/sm` | 8 | `--k9-space-sm` |
| `spacing/md` | 12 | `--k9-space-md` |
| `spacing/lg` | 16 | `--k9-space-lg` |
| `spacing/xl` | 24 | `--k9-space-xl` |
| `spacing/xxl` | 32 | `--k9-space-xxl` |
| `spacing/xxxl` | 48 | `--k9-space-xxxl` |
| `spacing/4xl` | 64 | `--k9-space-4xl` |

### Collection `Radius`

| Variable | px | Token |
|---|---|---|
| `radius/none` | 0 | `--k9-radius-none` |
| `radius/sm` | 4 | `--k9-radius-sm` |
| `radius/md` | 8 | `--k9-radius-md` |
| `radius/lg` | 12 | `--k9-radius-lg` |
| `radius/xl` | 16 | `--k9-radius-xl` |
| `radius/full` | 9999 | `--k9-radius-full` |

### Collection `Shell`

| Variable | px | Token |
|---|---|---|
| `shell/topbar-height` | 56 | `--k9-topbar-height` |
| `shell/bottom-nav-height` | 48 | `--k9-bottom-nav-height` |
| `shell/sidenav-width` | 240 | `--k9-sidenav-width` |
| `shell/z-base` | 0 | `--k9-z-base` |
| `shell/z-raised` | 10 | `--k9-z-raised` |
| `shell/z-dropdown` | 20 | `--k9-z-dropdown` |
| `shell/z-sticky` | 30 | `--k9-z-sticky` |
| `shell/z-topbar` | 40 | `--k9-z-topbar` |
| `shell/z-nav` | 45 | `--k9-z-nav` |
| `shell/z-modal` | 50 | `--k9-z-modal` |
| `shell/z-toast` | 60 | `--k9-z-toast` |

---

## Styles de texte Figma

| Style Figma | Font | Size | Line-h | Weight | Letter-spacing | Transform |
|---|---|---|---|---|---|---|
| `display` | Manrope | 72 | 72 | 400 | -5% | — |
| `h1` | Manrope | 32 | 40 | 600 | -2% | — |
| `h2` | Manrope | 24 | 32 | 600 | -1% | — |
| `h3` | Manrope | 20 | 28 | 600 | 0% | — |
| `body-large` | Manrope | 20 | 32 | 400 | 0% | — |
| `body-md` | Manrope | 16 | 24 | 400 | 0% | — |
| `body` | Manrope | 14 | 20 | 400 | 0% | — |
| `button` | Manrope | 16 | 24 | 700 | 0% | — |
| `label` | Manrope | 12 | 16 | 700 | 30% | UPPERCASE |
| `caption` | Manrope | 10 | 15 | 400 | 40% | — |

> `label` est **toujours uppercase dans Figma**. Le text-transform est une règle de rendu, pas une convention de casse manuelle.

---

## Mapping sémantique — états fonctionnels → tokens de couleur

Les états fonctionnels (success, warning, error, info) ne sont pas des tokens distincts : ils s'appuient sur les tokens de rôle existants. Ce tableau est la source de vérité pour tout composant qui expose une `variant` sémantique.

| État sémantique | Couleur de base | Fill subtle | Border | Texte | Icône |
|---|---|---|---|---|---|
| `success` | `color/primary` | `color/primary-subtle` | `color/primary` | `color/primary` | `color/primary` |
| `warning` | `color/secondary` | `color/secondary-subtle` | `color/secondary` | `color/secondary` | `color/secondary` |
| `error` | `color/danger` | `color/danger-subtle` | `color/danger` | `color/danger` | `color/danger` |
| `info` | `color/neutral` | `color/surface` | `color/border` | `color/text-secondary` | `color/text-secondary` |

> **Pourquoi `secondary` = warning** : le coral (#FFB5A1) est visuellement interprété comme un signal d'attention (chaud, sans être une alerte critique). Il est **distinct** de `danger` (#FC8585) qui est clairement rouge.
> **Règle de nommage** : les `variant` Angular restent `info | success | warning | error`. Le mapping vers les tokens de couleur ci-dessus est la responsabilité du composant, pas de l'appelant.

---

## Règles de "pâte graphique" — invariants visuels

Ces règles définissent l'identité K9 Pro. Tout écart est une regression, pas une évolution.

### R1 — Thème sombre exclusif
Fond systématique `color/bg` (`#0F1419`). Surfaces en 4 niveaux d'élévation :
```
bg (#0F1419) → surface (#1B2025) → surface-raised (#252A30) → surface-elevated (#30353A)
```
Les éléments "flottants" (modals, dropdowns, tooltips) utilisent `surface-elevated`.

### R2 — Bordure universelle `1px solid color/border`
Tout conteneur (card, input, badge, select, modal) porte `1px solid #434842`. Jamais plus épaisse. La bordure devient `color/primary` uniquement sur focus/active.

### R3 — Radius par rôle sémantique
| Rôle | Radius | px |
|---|---|---|
| Actions (boutons, tags interactifs) | `xl` | 16px |
| Champs de saisie (input, select, dropdown trigger) | `xl` | 16px |
| Conteneurs de données (chart-card, metric-card) | `md` | 8px |
| Cards génériques et modals | `xl` | 16px |
| Pills, badges, progress bars, toggle track | `full` | 9999px |
| Éléments de navigation (nav-item) | `md` | 8px |
| Avatar sm | `md` | 8px |
| Avatar md/lg | `xl` | 16px |
| Icon-wraps petits (alert, empty-state) | `lg` | 12px |

> **Inputs et selects** → `radius/xl` (16px), pas `md`. Leur hauteur de 64px appelle un radius plus prononcé.
> **Conteneurs de données** (chart-card, metric-card) → `radius/md` (8px). Ils affichent des graphiques et métriques, pas des actions.
> `card` générique → `radius/xl`. Ne pas confondre avec les data cards.

### R4 — Glow primary = seul marqueur d'état actif
```
couleur  → color/primary (#BACBB8)
fond     → color/primary-subtle (rgba 5%)
ombre    → 0 0 10px 1px rgba(186,203,184,0.15)
```
Aucune autre couleur ne marque l'état actif. L'état hover utilise `primary-hover` (rgba 10%).

### R5 — Hiérarchie typographique dans les cards de données
```
LABEL   → 12px · 700 · uppercase · letter-spacing 0.3em · color/text-secondary
Valeur  → 24px (h2) ou 36px · 700-800 · color/text · letter-spacing négatif
Unité   → 14px · 500 · uppercase · color/text-secondary
```
Le label ne descend jamais sous 12px. La valeur ne monte jamais au-dessus de 36px/800.

### R6 — Live = animated border + pulse
Un état "temps réel" se distingue par :
- Bordure native → `transparent`
- Pseudo-élément `::before` → `conic-gradient` sage-vert en rotation 5s
- `box-shadow` pulsant entre `rgba(186,203,184,0.10)` et `rgba(186,203,184,0.28)` en 2.5s

Dans Figma : annoter `@live` dans le nom du layer. Représenter par un stroke extérieur dégradé + effet "Glow".

### R7 — Spring sur les transitions d'état discret
Micro-interactions on/off (nav-item, toggle, checkbox) : easing spring `cubic-bezier(0.34, 1.56, 0.64, 1)`, `300ms`.
Dans Figma : transition Smart Animate, easing Custom `0.34 / 1.56 / 0.64 / 1`, durée `300ms`.

### R8 — Icônes
Toutes les icônes utilisent `stroke="currentColor"`. Taille standard : `24×24px`. Taille dans bottom-nav et list-item : `20×20px`. Jamais de couleur hardcodée.

### R9 — Glassmorphism — réservé aux éléments flottants mobiles
Le glassmorphism (`backdrop-filter: blur` + `color-mix` + opacité < 100%) est utilisé **exclusivement** pour les éléments qui flottent au-dessus du contenu scrollable sur mobile :
```
backdrop-filter : blur(20px)
background      : color-mix(in srgb, --k9-color-surface-elevated 70%, transparent)
border          : 1px solid color-mix(in srgb, --k9-color-border 60%, transparent)
```
Composants éligibles : `k9-bottom-nav`. Ne pas appliquer aux modals, dropdowns, tooltips (ils utilisent `surface-elevated` plein).

### R10 — `radius/lg` (12px) — usage normé : icon-wraps
`radius/lg` est réservé aux **conteneurs d'icône carrés** (wraps d'illustration ou d'icône fonctionnelle) :
- `alert` icon-wrap : `48×48px · radius lg`
- `empty-state` icon-wrap : taille variable · `radius lg`

Ne pas utiliser `radius/lg` pour les composants interactifs (boutons, inputs, cards) — leurs rôles respectifs imposent `xl`, `md` ou `full`.

---

## Specs composants — mesures exactes

### Button

```
Selector Angular : k9-button
Variants         : primary | secondary | ghost | danger
Sizes            : sm | md | lg

─── sm ───  height 48px · padding-x 16px · font body (14px/700) · radius xl
─── md ───  height 64px · padding-x 24px · font button (16px/700) · radius xl
─── lg ───  height 72px · padding-x 32px · font body-large (20px/700) · radius xl

─── primary ───
  fill normal    : color/primary (#BACBB8)
  text           : color/primary-text (#263427)
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
  fill normal    : color/danger (#FFB4AB) · text color/danger-text (#690005)
  hover          : danger + inset white 8%
  active         : scale(0.97)
  disabled       : fill surface · text text-disabled
```

### Input

```
Selector Angular : k9-input
height           : 64px
radius           : xl (16px)
fill default     : color/surface
border default   : 1px solid transparent
fill filled      : color/surface-raised
padding-x        : 24px (spacing/xl)
font             : body (14px/400)
placeholder      : color/text-muted
icon padding-r   : 24px

─── focus-within ───
  border : color/primary
  shadow : 0 0 0 3px rgba(186,203,184,0.35)

─── error ───
  border : color/danger
  focus-within shadow : 0 0 0 3px rgba(255,180,171,0.10)
  icon color : color/danger

─── success ───
  border : color/primary
  icon color : color/primary

─── disabled ───
  fill   : color/surface-deep
  border : color/border
  cursor : not-allowed
```

### ChartCard

```
Selector Angular : k9-chart-card
fill             : color/surface
border           : 1px solid color/border
radius           : md (8px)
padding          : 24px (spacing/xl) · tous côtés
gap              : 24px entre header et chart

─── header ─── flex row · space-between · align-items flex-start · gap 12px

─── meta (gauche) ───
  layout : flex column · gap 2px
  title  : label style (12px/700/uppercase/0.3em/text-secondary)
  value  : h2 (24px/700/-0.01em/text)
  unit   : label (12px, text-secondary)

─── live-badge (droite) ───
  padding   : 4px 8px
  radius    : md (8px)
  fill      : color/primary-subtle
  border    : 1px solid color/primary
  text      : caption (10px/700/0.4em/color/primary)
  dot       : 5×5px · radius full · currentColor | @animated dot-breathe 2.5s

─── chart area ─── height 128px · width 100%

─── live state ───
  border       → transparent
  ::before     → conic-gradient(sage) spin 5s | @live
  box-shadow   → pulse 0–28% opacity 2.5s | @animated
```

### MetricCard

```
Selector Angular : k9-metric-card
fill             : color/surface
border           : 1px solid color/border
radius           : md (8px)
padding          : 24px (spacing/xl)
gap              : 16px (spacing/lg)

─── header row ─── flex · space-between · align-center

label             : label style · text-secondary · uppercase

trend badge
  up   → fill primary-subtle · text primary · padding 2px/8px · radius full
  down → fill danger-subtle  · text danger  · caption (10px/700/0.4em)

─── value row ─── flex · align-baseline · gap 8px
value             : 36px/40px · 800 (extrabold) · text · letter-spacing -0.02em
unit              : body (14px/500) · text-secondary · uppercase

─── progress bar ───
track             : height 4px · radius full · fill surface-elevated
fill              : height 4px · radius full · fill primary
```

### Badge

```
Selector Angular : k9-badge
height           : 28px
padding-x        : 12px (spacing/md)
radius           : full
border           : 1px solid (couleur du variant)
font             : caption (10px/700/0.4em)
dot              : 6×6px · radius full · currentColor

success → fill primary-hover  · border primary  · text primary
warning → fill secondary-hover · border secondary · text secondary
error   → fill danger-hover   · border danger   · text danger
neutral → fill neutral-hover  · border neutral  · text neutral
```

### Avatar

```
Selector Angular : k9-avatar
radius sm        : md (8px)   · size 40×40px
radius md        : xl (16px)  · size 64×64px
radius lg        : xl (16px)  · size 80×80px

border           : 1px solid color/border
fill             : color/surface-raised

initials
  font  : body (14px/700) · uppercase · letter-spacing 0.05em · text

with-text layout : flex row · align-center · gap 12px (spacing/md)
name             : body (14px/500) · text
subtitle         : caption (10px) · text-muted
```

### Topbar

```
Selector Angular : k9-topbar
height           : 56px (shell/topbar-height)
fill             : color/surface  (hook : --k9-topbar-bg)
border-bottom    : 1px solid color/border (hook : --k9-topbar-border)
padding-x        : 16px (spacing/lg)

layout           : flex · space-between · align-center · gap 8px
start slot       : flex · align-center · gap 8px · min-width 40px
center slot      : flex 1 · align-center · justify-center · overflow hidden
end slot         : flex · align-center · justify-end · gap 8px · min-width 40px
```

### NavItem — bottom

```
Selector Angular : k9-nav-item [variant="bottom"]
height           : 48px (shell/bottom-nav-height)
padding-x        : 24px (spacing/xl)
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
Selector Angular : k9-nav-item [variant="side"]
width            : 100%
padding          : 8px 16px (spacing/sm + spacing/lg)
radius           : md (8px)
layout           : flex row · align-center · justify-start · gap 12px
icon             : 24×24px
label            : body (14px/500)

default → text color/text-muted
hover   → fill neutral-hover · text text-secondary
active  → fill primary-subtle · text primary · shadow primary-glow | @spring 300ms
```

### Alert

```
Selector Angular : k9-alert
layout           : flex row · align-items flex-start · gap 16px (spacing/lg)
padding          : 24px (spacing/xl) · tous côtés
radius           : xl (16px)
border           : 1px solid (couleur du variant)

─── icon-wrap ─── 48×48px · radius lg (12px) · flex center
─── body ─── flex col · gap 8px (spacing/sm)
  title       : body (14px/600) · couleur du variant
  description : body (14px/400) · text-secondary

─── info ───
  fill      : color/surface
  border    : color/border
  icon-wrap : fill primary-hover · color primary

─── success ───
  fill      : color/primary-subtle
  border    : color/primary
  icon-wrap : fill primary · color primary-text
  title     : color/primary

─── warning ───
  fill      : color/secondary-subtle
  border    : color/secondary
  icon-wrap : fill secondary · color secondary-text
  title     : color/secondary

─── error ───
  fill      : color/danger-subtle
  border    : color/danger
  icon-wrap : fill danger · color danger-text
  title     : color/danger

dismiss button : color text-muted · hover text · transition fast
```

### Card

```
Selector Angular : k9-card
fill             : color/surface
radius           : xl (16px)
border           : 1px solid color/border (--border=true)
overflow         : hidden

─── elevation variants ───
  none : shadow none
  sm   : shadow sm
  md   : shadow md
  lg   : shadow lg

─── padding variants (body) ───
  none : 0
  sm   : 8px (spacing/sm)
  md   : 16px (spacing/lg)
  lg   : 24px (spacing/xl)

─── header ─── padding 16px (spacing/lg) · border-bottom 1px border · h3 (20px/700/text)
─── body ─── padding 16px par défaut
─── footer ─── padding 12px 16px (spacing/md + spacing/lg) · border-top 1px · fill surface-deep

─── interactive ───
  cursor pointer · hover translateY(-2px) + shadow-lg · transition normal/standard

─── live ─── @live @animated
  border transparent · ::before conic-gradient sage spin 5s ·
  box-shadow pulse 10%→28% opacity 2.5s ease-in-out
```

### Checkbox

```
Selector Angular : k9-checkbox
layout           : inline-flex · align-center · gap 8px (spacing/sm)

─── box ─── 20×20px · radius sm (4px) · border 1.5px border · fill transparent

unchecked
  border color/border · fill transparent
hover (not disabled)
  border color/primary · fill primary-hover
checked
  fill primary · border primary · @animated checkbox-pop (scale 1→1.18→1, 200ms, emphasis)
indeterminate
  fill primary · border primary (dash icon)
focus-visible
  shadow focus · border primary
disabled
  opacity 0.4 · cursor not-allowed

label text : body (14px/400/text)
```

### Divider

```
Selector Angular : k9-divider
width            : 100%

─── simple ───
  line 1px height · fill color/border

─── labeled ───
  flex row · gap 12px (spacing/md)
  two half-lines (fill border) flanking the label
  label : caption (10px/400/text-muted/uppercase/0.4em letter-spacing)

─── progress ───
  flex row · gap 4px (spacing/xs)
  dots h=6px · radius full
  active dot  : w=48px · fill primary
  inactive dot: w=12px · fill surface-elevated
```

### Dropdown

```
Selector Angular : k9-dropdown

─── trigger ─── inline-flex · h=40px · padding 0 16px (spacing/lg) · radius xl (16px)
  border   : 1px solid color/border · fill surface
  font     : body (14px/500)
  hover    : fill surface-raised · border primary
  open     : border primary · shadow focus
  disabled : opacity 0.4 · cursor not-allowed
  arrow    : 16px icon · text-muted · rotate 180° on open

─── menu ─── fill surface-raised · radius xl · border 1px border · shadow-lg
  padding  : 4px (spacing/xs) · flex col · gap 2px
  offset   : top calc(100% + 4px)
  entrance : @animated dropdown-in (opacity 0→1 + translateY -4px→0) · decelerate · fast

─── item ─── h=40px · padding 0 12px (spacing/md) · radius lg (12px) · body (14px/text)
  hover    : fill surface-elevated
  danger   : text danger · hover fill danger-subtle
  disabled : opacity 0.4
```

### EmptyState

```
Selector Angular : k9-empty-state
layout           : flex col · align-center · justify-center · text-center · gap 12px (spacing/md)

─── sm ─── padding 24px (spacing/xl) · icon 40×40px · title body (14px/600/text)
─── md ─── padding 48px (spacing/xxxl) · icon 64×64px · title h3 (20px/600/text)
─── lg ─── padding 64px (spacing/4xl) · icon 80×80px · title h3 (20px/600/text)

description     : body (14px/400/text-secondary) · max-width 360px
icon color      : text-muted · stroke currentColor

─── action button ─── margin-top 8px
  h=48px · padding 0 24px (spacing/xl) · radius xl · border 1px border
  fill transparent · font body (14px/500) · text primary
  hover : fill primary-hover · border primary
```

### FormField

```
Selector Angular : k9-form-field
layout           : flex col · gap 8px (spacing/sm) · full width

label  : caption (10px/700/uppercase/0.4em letter-spacing) · text-muted
         * required → suffix " *" in text danger

error  : caption (10px/400) · text danger
help   : caption (10px/400) · text-muted
```

### ListItem

```
Selector Angular : k9-list-item
padding          : 16px (spacing/lg) · tous côtés
radius           : md (8px)
fill             : color/surface
border           : 1px solid color/border
layout           : flex row · space-between · align-center · gap 16px

─── left ─── flex row · gap 16px · flex 1
  icon  : 20×20px · text-secondary
  text  : flex col · gap 2px
    label    : body (14px/700/text) · ellipsis
    sublabel : caption (10px/400/text-muted) · ellipsis

─── right ───
  value   : caption (10px/700/text-secondary)
  chevron : 12px · text-muted

─── navigation variant ───
  cursor pointer · hover fill surface-raised · focus shadow-focus

─── status-error variant ───
  icon text danger · label text danger

─── skeleton variant ───
  avatar placeholder : 40×40px (use k9-skeleton circle)
  label bar          : 96×12px · radius md
  sublabel bar       : 128×8px · radius md
  value bar          : 48×16px · radius full
```

### Modal

```
Selector Angular : k9-modal

─── backdrop ─── fixed inset 0 · z=z-modal (50) · bg rgba(0,0,0,0.60) · backdrop-filter blur(4px)
  @animated modal-backdrop-in (opacity 0→1) · standard · normal (200ms)

─── panel ─── fill surface · radius xl (16px) · border 1px border · shadow-xl
  @animated modal-panel-in (opacity 0→1 + translateY 12px + scale 0.97→1) · emphasis · normal

─── sizes ───
  sm : max-width 400px
  md : max-width 560px
  lg : max-width 760px

─── header ─── padding 24px 24px 0 · gap 16px · flex row · space-between
  title : h3 (20px/600/text)
  close : radius md · hover fill surface-raised · color text-muted→text

─── body ─── padding 24px (spacing/xl)
```

### Progress

```
Selector Angular : k9-progress
layout           : flex col · gap 8px (spacing/sm) · full width

─── track ─── h=4px · radius full · fill surface-elevated
─── fill ─── h=4px · radius full · fill primary · shadow primary-glow
  transition width slow (300ms) standard

label : caption (10px/400/text-muted) · right-aligned
```

### Radio

```
Selector Angular : k9-radio
layout           : inline-flex · align-center · gap 8px (spacing/sm)

─── dot ─── 20×20px · radius full · border 1.5px border · fill transparent
  inner dot : 8×8px · radius full · fill primary-text · scale(0) unchecked → scale(1) checked
  transition : emphasis easing · fast

unchecked   : border color/border
hover       : border primary · fill primary-hover
checked     : dot fill primary · border primary · inner scale(1)
focus-visible : shadow focus · border primary
disabled    : opacity 0.4

label text : body (14px/400/text)
```

### Select

```
Selector Angular : k9-select
(identique à k9-input en hauteur — miroir du composant Input)

─── label ─── caption (10px/700/uppercase/0.4em) · text-muted

─── trigger ─── h=64px · padding 0 24px (spacing/xl) · radius xl (16px)
  border   : 1px solid transparent · fill surface · body (14px/text)
  focus    : border primary · shadow focus
  open     : border primary · shadow focus
  disabled : fill surface-deep · border border-color · text-muted · cursor not-allowed
  error    : border danger · open: shadow danger-hover

─── menu ─── fill surface-raised · radius xl · border 1px border · shadow-lg
  padding  : 4px (spacing/xs) · flex col · gap 2px
  offset   : top calc(100% + 4px) · full width
  entrance : @animated select-menu-in · decelerate · fast

─── item ─── h=40px · padding 0 12px (spacing/md) · radius lg · body (14px/text)
  hover    : fill surface-elevated
  selected : text primary · medium weight · hover fill primary-subtle
  disabled : opacity 0.4

error message : caption (10px) · text danger · margin-left 8px
```

### SideNav

```
Selector Angular : k9-side-nav
width            : 240px (shell/sidenav-width)
height           : 100%
fill             : color/surface
border-right     : 1px solid color/border
overflow-y       : auto

─── header ─── padding 16px (spacing/lg) · border-bottom 1px · min-height 56px (topbar-height)
─── items ─── padding 8px (spacing/sm) · gap 4px (spacing/xs) · flex col · flex 1
─── footer ─── padding 16px (spacing/lg) · border-top 1px (hidden if empty)
```

### Skeleton

```
Selector Angular : k9-skeleton
animation        : shimmer 1.5s linear @infinite
  gradient : surface (25%) → surface-raised (50%) → surface (75%) · width 800px

─── circle    ─── 48×48px · radius full
─── rectangle ─── full width · h=24px · radius sm (4px)
─── text      ─── full width · h=16px · radius sm (4px)

width / height can be overridden via inputs for custom sizing
```

### Slider

```
Selector Angular : k9-slider
layout           : flex col · gap 8px (spacing/sm) · full width

─── header ─── flex row · space-between
  label : caption (10px/700/uppercase/0.4em) · text-muted
  value : caption (10px/400) · text-secondary

─── track container ─── h=24px · relative
  track : absolute · h=4px · radius full · fill surface-elevated
  fill  : h=4px · radius full · fill primary · transition fast standard

─── thumb ─── 20×20px · radius full · fill primary · shadow-md
  hover : scale(1.15) · transition fast standard
  focus : shadow focus

disabled : opacity 0.4 · pointer-events none
```

### Spinner

```
Selector Angular : k9-spinner
layout           : inline-flex · align-center · gap 8px (spacing/sm)
animation        : rotate 360° · 0.8s linear @infinite

─── sizes ───
  sm : 20×20px · border 2px
  md : 40×40px · border 3px
  lg : 56×56px · border 4px

─── variants (piste + arc) ───
  primary   : piste color/border · arc color/primary (border-top)
  secondary : piste color/border · arc color/secondary (border-top)
  white     : piste rgba(255,255,255,0.20) · arc #ffffff (border-top)

label : body (14px/400) · text-secondary
```

### Tabs

```
Selector Angular : k9-tabs
container        : flex row · gap 4px (spacing/xs) · padding 4px (spacing/xs)
fill             : color/surface · radius xl (16px) · border 1px border

─── tab ─── flex 1 · h=40px · padding 0 16px (spacing/lg) · radius lg (12px) · body (14px/500)
  default  : text-secondary
  hover    : text · fill surface-raised · transition fast
  active   : fill surface-elevated · text · semibold (600) · shadow-sm
  disabled : opacity 0.4 · cursor not-allowed
```

### Toast

```
Selector Angular : k9-toast
position         : fixed · z=z-toast (60)
layout           : flex row · align-center · gap 12px (spacing/md)
padding          : 12px 16px (spacing/md × spacing/lg)
radius           : xl (16px) · border 1px · shadow-lg
min-width        : 280px · max-width 480px
@animated        : toast-in (opacity 0→1 + translateY 8px→0) · emphasis · normal (200ms)

─── variants ───
  info    : fill surface-raised · border border-color · text text
  success : fill primary-subtle · border primary    · text primary
  warning : fill secondary-subtle · border secondary · text secondary
  error   : fill danger-subtle   · border danger    · text danger

─── positions ─── offset 24px (spacing/xl) from edge
  top-right / top-left / bottom-right / bottom-left

message : body (14px/400/line-height-body) · color inherit
close   : opacity 0.6 → 1 on hover · transition fast
```

### Toggle

```
Selector Angular : k9-toggle
layout           : inline-flex · align-center · gap 12px (spacing/md)

─── track ─── 48×28px · radius full
  off    : fill surface-elevated
  on     : fill primary · shadow primary-glow
  transition background-color · normal · standard

─── slider ─── 20×20px · radius full · top=4px
  off    : left=4px · fill color/text
  on     : left=24px (calc(100% - 24px)) · fill primary-text
  transition left · normal · @spring emphasis
  focus  : shadow focus

label   : body (14px/400/text)
disabled: opacity 0.4 · cursor not-allowed
```

### Tooltip

```
Selector Angular : k9-tooltip
bubble           : fill surface-elevated · border 1px border · radius md (8px) · shadow-md
padding          : 4px 8px (spacing/xs × spacing/sm)
font             : caption (10px/400/text) · white-space nowrap
show             : on hover / focus-within · opacity 0→1 · fast standard
offset           : 4px (spacing/xs) from trigger

─── positions ───
  top    : bottom calc(100% + 4px) · translate-X -50% · slide-in from +4px Y
  bottom : top   calc(100% + 4px) · translate-X -50% · slide-in from -4px Y
  left   : right calc(100% + 4px) · translate-Y -50% · slide-in from +4px X
  right  : left  calc(100% + 4px) · translate-Y -50% · slide-in from -4px X
```

### AppShell

```
Selector Angular : k9-app-shell
layout           : CSS grid · rows (auto 1fr) · min-height 100dvh · fill bg

─── topbar area ─── sticky top 0 · z-topbar
  mobile (<768px) : position fixed · bg transparent · border transparent
                    hide on scroll : translateY(-100%) + opacity 0 | @animated slow/standard
  desktop (≥768px): sticky (défaut)

─── body area ─── flex row · overflow hidden
  sidenav : hidden mobile · visible desktop (flex)
  main    : flex 1 · overflow-y auto
    mobile  : padding 16px · padding-top (topbar-height + safe-area + sm) · padding-bottom (bottom-nav + xl + safe-area)
    desktop : padding 24px (spacing/xl)

─── bottom nav ─── visible mobile · hidden desktop (display none)

(aucun input — composant structurel pur)
```

### BottomNav

```
Selector Angular : k9-bottom-nav
position         : fixed · bottom (spacing/xxl + safe-area-inset-bottom) · centered
width            : fit-content · z-nav
height           : 48px (shell/bottom-nav-height)
radius           : xl (16px)
Glassmorphism    : fill color-mix(surface-elevated 70%) · backdrop-filter blur(20px)
border           : 1px color-mix(border 60% transparent)
shadow           : shadow-xl
overflow         : hidden

items container  : flex row · align-center · full width · height bottom-nav-height
(items sont des k9-nav-item variant="bottom")
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
button/danger/disabled

input/default
input/filled
input/focus
input/error
input/success
input/disabled

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

select/default
select/open
select/disabled
select/error

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
```

**Règle** : kebab-case strict. Le nom du composant Figma correspond directement au sélecteur Angular (`k9-[composant]`) et au modificateur BEM (`.composant--[variant]`).

---

## Figma Component Properties — correspondance inputs Angular

Chaque composant Figma expose des **Component Properties** qui matchent les `input()` Angular.

```
button
  variant  : Variant (select) → primary | secondary | ghost | danger
  size     : Size (select) → sm | md | lg
  disabled : Boolean → false
  label    : Text → "Button"

input
  state    : Variant (select) → default | filled | focus | error | success | disabled
  placeholder : Text → "Placeholder"
  hasIcon  : Boolean → false

chart-card
  variant  : Variant (select) → populated | skeleton | empty
  isLive   : Boolean → false
  title    : Text → "Heart Rate"
  value    : Text → "72"
  unit     : Text → "BPM"

metric-card
  variant  : Variant (select) → active | loading | empty
  label    : Text → "Distance"
  value    : Text → "8.4"
  unit     : Text → "KM"
  trend    : Variant (select) → up | down | none

badge
  variant  : Variant (select) → success | warning | error | neutral
  label    : Text → "Online"
  hasDot   : Boolean → true

nav-item
  variant  : Variant (select) → bottom | side
  active   : Boolean → false
  label    : Text → "Home"
  hasBadge : Boolean → false

alert
  variant     : Variant (select) → info | success | warning | error
  dismissible : Boolean → false
  visible     : Boolean → true

card
  padding     : Variant (select) → none | sm | md | lg
  elevation   : Variant (select) → none | sm | md | lg
  border      : Boolean → true
  interactive : Boolean → false
  isLive      : Boolean → false

checkbox
  checked       : Boolean → false
  disabled      : Boolean → false
  indeterminate : Boolean → false
  label         : Text → "Label"

divider
  variant : Variant (select) → simple | labeled | progress
  label   : Text → "ou"

dropdown
  label    : Text → "Options"
  disabled : Boolean → false

empty-state
  size        : Variant (select) → sm | md | lg
  title       : Text → "Aucun résultat"
  description : Text → "Modifiez vos critères de recherche."
  actionLabel : Text → "Réessayer"

form-field
  label        : Text → "Champ"
  required     : Boolean → false
  errorMessage : Text → ""
  helpText     : Text → ""

list-item
  variant  : Variant (select) → toggle | navigation | text-value | skeleton | status-error
  icon     : Text → "fa-solid fa-wifi"
  label    : Text → "Label"
  sublabel : Text → "Sublabel"
  value    : Text → "Valeur"
  checked  : Boolean → false

modal
  size  : Variant (select) → sm | md | lg
  title : Text → "Titre"

progress
  value     : Number → 60
  size      : Variant (select) → sm | md | lg
  showLabel : Boolean → true

radio
  checked  : Boolean → false
  disabled : Boolean → false
  label    : Text → "Option"
  value    : Text → "option"

select
  label       : Text → "Sélectionnez"
  placeholder : Text → "Choisir…"
  disabled    : Boolean → false
  hasError    : Boolean → false

skeleton
  shape  : Variant (select) → rectangle | circle | text
  width  : Text → "100%"
  height : Text → "24px"
  count  : Number → 1

slider
  value    : Number → 50
  min      : Number → 0
  max      : Number → 100
  step     : Number → 1
  disabled : Boolean → false
  label    : Text → "Volume"

spinner
  size    : Variant (select) → sm | md | lg
  variant : Variant (select) → primary | secondary | white
  label   : Text → ""

tabs
  activeTab : Text → "tab1"

toast
  variant    : Variant (select) → info | success | warning | error
  position   : Variant (select) → top-right | top-left | bottom-right | bottom-left
  message    : Text → "Opération réussie."
  visible    : Boolean → true
  duration   : Number → 0
  dismissible: Boolean → true

toggle
  checked  : Boolean → false
  disabled : Boolean → false
  label    : Text → "Activer"

tooltip
  position : Variant (select) → top | bottom | left | right
  content  : Text → "Info contextuelle"
  disabled : Boolean → false
```

---

## Description field — métadonnées machine-readable

Chaque composant Figma porte dans son champ **Description** le bloc suivant (copier/coller strictement) :

```
selector: k9-[composant]
status: stable | beta | deprecated
tokens: --k9-[token1], --k9-[token2]
storybook: /story/design-system-components-[composant]--default
inputs: [input1, input2, ...]
```

Exemples :

```
--- button ---
selector: k9-button
status: stable
tokens: --k9-color-primary, --k9-radius-xl, --k9-font-size-button
storybook: /story/design-system-components-button--default
inputs: variant, size, disabled, fullWidth, isLoading

--- chart-card ---
selector: k9-chart-card
status: stable
tokens: --k9-color-surface, --k9-radius-md, --k9-space-xl, --k9-color-primary
storybook: /story/design-system-components-chartcard--default
inputs: isLive, variant, value, unit, label

--- input ---
selector: k9-input
status: stable
tokens: --k9-color-surface, --k9-radius-xl, --k9-space-xl, --k9-shadow-focus
storybook: /story/design-system-components-input--default
inputs: placeholder, disabled, hasIcon, state

--- alert ---
selector: k9-alert
status: stable
tokens: --k9-color-primary-subtle, --k9-color-danger-subtle, --k9-radius-xl, --k9-space-xl
storybook: /story/design-system-components-alert--default
inputs: variant, dismissible, visible

--- card ---
selector: k9-card
status: stable
tokens: --k9-color-surface, --k9-radius-xl, --k9-color-border, --k9-shadow-lg
storybook: /story/design-system-components-card--default
inputs: padding, elevation, border, interactive, isLive

--- checkbox ---
selector: k9-checkbox
status: stable
tokens: --k9-color-primary, --k9-radius-sm, --k9-shadow-focus, --k9-easing-emphasis
storybook: /story/design-system-components-checkbox--default
inputs: checked, disabled, indeterminate, label

--- divider ---
selector: k9-divider
status: stable
tokens: --k9-color-border, --k9-color-primary, --k9-font-size-caption
storybook: /story/design-system-components-divider--default
inputs: variant, label

--- dropdown ---
selector: k9-dropdown
status: stable
tokens: --k9-color-surface, --k9-radius-xl, --k9-color-border, --k9-shadow-lg
storybook: /story/design-system-components-dropdown--default
inputs: label, items, disabled

--- empty-state ---
selector: k9-empty-state
status: stable
tokens: --k9-color-text-muted, --k9-radius-xl, --k9-color-primary, --k9-space-xxxl
storybook: /story/design-system-components-emptystate--default
inputs: size, title, description, actionLabel

--- form-field ---
selector: k9-form-field
status: stable
tokens: --k9-font-size-caption, --k9-color-text-muted, --k9-color-danger
storybook: /story/design-system-components-formfield--default
inputs: label, required, errorMessage, helpText

--- list-item ---
selector: k9-list-item
status: stable
tokens: --k9-color-surface, --k9-radius-md, --k9-space-lg, --k9-color-danger
storybook: /story/design-system-components-listitem--default
inputs: data

--- modal ---
selector: k9-modal
status: stable
tokens: --k9-color-surface, --k9-radius-xl, --k9-shadow-xl, --k9-easing-emphasis
storybook: /story/design-system-components-modal--default
inputs: isOpen, size, title

--- progress ---
selector: k9-progress
status: stable
tokens: --k9-color-primary, --k9-radius-full, --k9-shadow-primary-glow
storybook: /story/design-system-components-progress--default
inputs: value, size, showLabel, label

--- radio ---
selector: k9-radio
status: stable
tokens: --k9-color-primary, --k9-radius-full, --k9-shadow-focus, --k9-easing-emphasis
storybook: /story/design-system-components-radio--default
inputs: checked, disabled, value, label

--- select ---
selector: k9-select
status: stable
tokens: --k9-color-surface, --k9-radius-xl, --k9-shadow-focus, --k9-color-primary
storybook: /story/design-system-components-select--default
inputs: options, label, placeholder, disabled, hasError

--- side-nav ---
selector: k9-side-nav
status: stable
tokens: --k9-color-surface, --k9-color-border, --k9-sidenav-width, --k9-topbar-height
storybook: /story/design-system-shell-sidenav--default
inputs: (structural — items via ng-content)

--- skeleton ---
selector: k9-skeleton
status: stable
tokens: --k9-color-surface, --k9-color-surface-raised, --k9-radius-sm, --k9-radius-full
storybook: /story/design-system-components-skeleton--default
inputs: shape, width, height, count

--- slider ---
selector: k9-slider
status: stable
tokens: --k9-color-primary, --k9-color-surface-elevated, --k9-shadow-focus
storybook: /story/design-system-components-slider--default
inputs: value, min, max, step, disabled, label

--- spinner ---
selector: k9-spinner
status: stable
tokens: --k9-color-primary, --k9-color-border, --k9-color-secondary
storybook: /story/design-system-components-spinner--default
inputs: size, variant, label

--- tabs ---
selector: k9-tabs
status: stable
tokens: --k9-color-surface, --k9-radius-xl, --k9-color-surface-elevated, --k9-shadow-sm
storybook: /story/design-system-components-tabs--default
inputs: tabs, activeTab

--- toast ---
selector: k9-toast
status: stable
tokens: --k9-color-primary-subtle, --k9-color-danger-subtle, --k9-radius-xl, --k9-shadow-lg
storybook: /story/design-system-components-toast--default
inputs: variant, position, message, visible, duration, dismissible

--- toggle ---
selector: k9-toggle
status: stable
tokens: --k9-color-primary, --k9-radius-full, --k9-shadow-primary-glow, --k9-easing-emphasis
storybook: /story/design-system-components-toggle--default
inputs: checked, disabled, label

--- tooltip ---
selector: k9-tooltip
status: stable
tokens: --k9-color-surface-elevated, --k9-radius-md, --k9-shadow-md, --k9-font-size-caption
storybook: /story/design-system-components-tooltip--default
inputs: position, content, disabled

--- app-shell ---
selector: k9-app-shell
status: stable
tokens: --k9-color-bg, --k9-topbar-height, --k9-bottom-nav-height, --k9-sidenav-width
storybook: /story/design-system-shell-appshell--default
inputs: (structural)

--- bottom-nav ---
selector: k9-bottom-nav
status: stable
tokens: --k9-color-surface-elevated, --k9-radius-xl, --k9-shadow-xl, --k9-bottom-nav-height
storybook: /story/design-system-shell-bottomnav--default
inputs: items
```

Claude lit ce bloc via l'API Figma (`node.description`) pour vérifier la cohérence code ↔ design.

---

## Page `_Status` — Dashboard de synchronisation

La page `_Status` contient un tableau Figma mis à jour à chaque modification :

| Composant | Figma | Code | Storybook | Dernière sync | Notes |
|---|---|---|---|---|---|
| alert | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| app-shell | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| avatar | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| badge | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| bottom-nav | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| button | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| card | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| chart-card | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| checkbox | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| divider | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| dropdown | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| empty-state | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| form-field | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| input | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| list-item | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| metric-card | ✅ stable | ✅ stable | ✅ | 2026-04 | ⚠️ label font-weight drift (regular vs bold) |
| modal | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| nav-item | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| progress | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| radio | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| select | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| side-nav | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| skeleton | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| slider | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| spinner | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| tabs | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| toast | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| toggle | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| tooltip | 🔄 beta | ✅ stable | ✅ | 2026-04 | Figma node à créer |
| topbar | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| chart-card | ✅ stable | ✅ stable | ✅ | 2026-04 | ⚠️ title font-weight drift (regular vs bold) |

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
| `duration/fastest` | 100ms | Micro-feedback (ripple) |
| `duration/fast` | 150ms | Transitions UI légères |
| `duration/normal` | 200ms | Transitions standard |
| `duration/slow` | 300ms | Animations d'état, spring |
| `duration/slower` | 400ms | Entrées/sorties de modals |

### Easings

| Token | Courbe | Usage |
|---|---|---|
| `easing/standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transitions UI courantes |
| `easing/accelerate` | `cubic-bezier(0.4, 0, 1, 1)` | Éléments qui quittent l'écran |
| `easing/decelerate` | `cubic-bezier(0, 0, 0.2, 1)` | Éléments qui entrent |
| `easing/emphasis` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | **Spring — micro-interactions** |

### Règles par type

| Type | Easing | Durée | Exemples |
|---|---|---|---|
| État on/off | `emphasis` (spring) | `slow` (300ms) | nav-item, toggle, checkbox |
| Transition UI | `standard` | `fast` (150ms) | hover, color change |
| Entrée élément | `decelerate` | `normal` (200ms) | toast, dropdown |
| Sortie élément | `accelerate` | `fast` (150ms) | toast dismiss |
| Live border | linear | 5000ms / infini | conic-gradient rotation |
| Pulse live | ease-in-out | 2500ms / infini | badge glow, card pulse |

### Annotations dans Figma
- `@animated` → animation CSS présente
- `@live` → état temps réel (conic-gradient + pulse)
- `@spring` → easing-emphasis sur la transition
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
  figmaUrl: 'https://www.figma.com/file/[FILE_KEY]?node-id=[NODE_ID]',
}
```

Les deux liens doivent être maintenus en sync. Lors d'un audit Claude :
1. Lit `figmaUrl` dans la story → fetch le node Figma → compare les specs
2. Lit `description.storybook` dans Figma → vérifie que la story existe

---

## Fichier Figma K9 Pro — Source de vérité

| Champ     | Valeur |
|-----------|--------|
| **URL**   | https://www.figma.com/design/7t9yhZTrDeEa3S5XwgRiXP |
| **fileKey** | `7t9yhZTrDeEa3S5XwgRiXP` |
| **Créé**  | 2026-04-03 |
| **Pages** | `_Tokens` · `_Status` · `Typography` · `Colors` · `Foundations` · `Components` · `Patterns` · `Motion` · `Playground` |

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

**Authentification** : OAuth 2.0 via Figma. À la première utilisation, lancer `/mcp` dans Claude Code et s'authentifier via le flow Figma.

**Outils disponibles** : `get_design_context`, `get_variable_defs`, `get_code_connect_map`, `get_screenshot`, `get_metadata`, `create_design_system_rules`, `get_figjam`, `generate_diagram`, `whoami`

**Fallback REST API** : Token `FIGMA_API_KEY` dans `~/.claude/mcp.json` — utilisé uniquement si le MCP n'est pas disponible.

---

## Audit automatique par Claude

Lorsqu'un lien Figma est fourni, Claude exécute :

```
1. GET /v1/files/[FILE_KEY]/nodes?ids=[NODE_IDS]
   → Extraire : dimensions · padding · gap · radius · couleurs · typographie

2. Comparer avec le code CSS correspondant dans libs/ui/

3. Comparer les Figma Variables avec variables.css
   → Tout écart de valeur = drift à corriger

4. Vérifier les Component Properties Figma vs inputs Angular
   → Propriété Figma manquante = input non documenté côté design

5. Lire _Status → mettre à jour le statut du composant audité
```

---

## Règles de contribution designer

1. **Ne jamais créer de valeur hors Variables** — toute couleur, taille, espacement doit référencer une Variable Figma. Zéro valeur hardcodée dans les layers.
2. **Nommer selon la convention** `composant/variant/état` — pas d'alias, pas d'espace.
3. **Renseigner le Description field** à chaque nouveau composant avant de partager.
4. **Mettre à jour `_Status`** après toute modification d'un composant existant.
5. **Annoter les layers animés** avec `@animated`, `@live`, `@spring`, `@infinite`.
6. **Proposer, ne pas décider** les écarts au design system — tout ajout de token passe par une PR code d'abord.

---

_v1.0 — K9 Pro — synchronisation Figma ↔ code — avril 2026_
