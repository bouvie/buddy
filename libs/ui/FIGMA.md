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
| `color/secondary-subtle` | `rgba(255,181,161,0.05)` | `--k9-color-secondary-subtle` |
| `color/danger` | `#FFB4AB` | `--k9-color-danger` |
| `color/danger-text` | `#690005` | `--k9-color-danger-text` |
| `color/danger-hover` | `rgba(255,180,171,0.10)` | `--k9-color-danger-hover` |
| `color/danger-subtle` | `rgba(255,180,171,0.05)` | `--k9-color-danger-subtle` |
| `color/neutral` | `#C4C8C0` | `--k9-color-neutral` |
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
| `spacing/max` | 64 | `--k9-space-max` |

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

---

## Styles de texte Figma

| Style Figma | Font | Size | Line-h | Weight | Letter-spacing | Transform |
|---|---|---|---|---|---|---|
| `display` | Manrope | 72 | 72 | 400 | -5% | — |
| `h1` | Manrope | 32 | 40 | 600 | -2% | — |
| `h2` | Manrope | 24 | 32 | 600 | -1% | — |
| `h3` | Manrope | 20 | 28 | 600 | 0% | — |
| `body-large` | Manrope | 20 | 32 | 400 | 0% | — |
| `body` | Manrope | 14 | 20 | 400 | 0% | — |
| `button` | Manrope | 16 | 24 | 700 | 0% | — |
| `label` | Manrope | 12 | 16 | 700 | 30% | UPPERCASE |
| `caption` | Manrope | 10 | 15 | 400 | 40% | — |

> `label` est **toujours uppercase dans Figma**. Le text-transform est une règle de rendu, pas une convention de casse manuelle.

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
| Conteneurs de données (chart-card, metric-card, input, select) | `md` | 8px |
| Cards génériques et modals | `xl` | 16px |
| Pills, badges, progress bars | `full` | 9999px |
| Éléments de navigation (nav-item) | `md` | 8px |
| Avatar sm | `md` | 8px |
| Avatar md/lg | `xl` | 16px |

> `chart-card` et `metric-card` utilisent `radius/md`. `card` générique utilise `radius/xl`. Ne pas confondre.

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
Toutes les icônes utilisent `stroke="currentColor"`. Taille standard : `24×24px`. Taille dans bottom-nav : `20×20px`. Jamais de couleur hardcodée.

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
height           : 29px
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
active  → text color/primary | @spring 300ms
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
```

Claude lit ce bloc via l'API Figma (`node.description`) pour vérifier la cohérence code ↔ design.

---

## Page `_Status` — Dashboard de synchronisation

La page `_Status` contient un tableau Figma mis à jour à chaque modification :

| Composant | Figma | Code | Storybook | Dernière sync | Notes |
|---|---|---|---|---|---|
| button | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| input | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| chart-card | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| metric-card | ✅ stable | ✅ stable | ✅ | 2026-04 | — |
| ... | | | | | |

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
