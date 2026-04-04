# Design Tokens K-10

> Snapshot — avril 2026. Source de vérité : `libs/ui/src/lib/tokens/variables.css`
> Figma fileKey : `5MS7DIRcSDz7lYm0tjze7x`

---

## Couleurs — Backgrounds & Surfaces

```css
--k10-color-bg-deep:          #070B11
--k10-color-bg:               #0C1219
--k10-color-surface:          #121D2A
--k10-color-surface-raised:   #192538
--k10-color-surface-elevated: #213047
--k10-color-surface-4:        #2A3D5C
--k10-color-border:           #354A62
--k10-color-input-bg:         #162233
--k10-color-input-border:     #1E2D42
```

## Couleurs — Rôles (6 états par rôle)

Chaque rôle expose : base · text · hover · pressed · focus · subtle

```css
/* PRIMARY — Sage */
--k10-color-primary:          #C4D9C2
--k10-color-primary-text:     #1E2E1C
--k10-color-primary-hover:    rgba(196, 217, 194, 0.10)
--k10-color-primary-pressed:  rgba(196, 217, 194, 0.20)
--k10-color-primary-focus:    rgba(196, 217, 194, 0.35)
--k10-color-primary-subtle:   rgba(196, 217, 194, 0.06)

/* ACCENT — Teal (live data / GPS) */
--k10-color-accent:           #5C9EA8
--k10-color-accent-text:      #0D2226
--k10-color-accent-hover:     rgba(92, 158, 168, 0.10)
--k10-color-accent-pressed:   rgba(92, 158, 168, 0.20)
--k10-color-accent-focus:     rgba(92, 158, 168, 0.35)
--k10-color-accent-subtle:    rgba(92, 158, 168, 0.06)

/* SECONDARY — Amber */
--k10-color-secondary:        #F4A86A
--k10-color-secondary-text:   #3D1E00
--k10-color-secondary-hover:  rgba(244, 168, 106, 0.10)
--k10-color-secondary-pressed:rgba(244, 168, 106, 0.20)
--k10-color-secondary-focus:  rgba(244, 168, 106, 0.35)
--k10-color-secondary-subtle: rgba(244, 168, 106, 0.06)

/* DANGER */
--k10-color-danger:           #BF6868
--k10-color-danger-text:      #2D0A0A
--k10-color-danger-hover:     rgba(191, 104, 104, 0.10)
--k10-color-danger-pressed:   rgba(191, 104, 104, 0.20)
--k10-color-danger-focus:     rgba(191, 104, 104, 0.35)
--k10-color-danger-subtle:    rgba(191, 104, 104, 0.06)

/* SUCCESS */
--k10-color-success:          #72C98A
--k10-color-success-text:     #0D2914
--k10-color-success-hover:    rgba(114, 201, 138, 0.10)
--k10-color-success-pressed:  rgba(114, 201, 138, 0.20)
--k10-color-success-focus:    rgba(114, 201, 138, 0.35)
--k10-color-success-subtle:   rgba(114, 201, 138, 0.06)

/* WARNING */
--k10-color-warning:          #F0C060
--k10-color-warning-text:     #2D1A00
--k10-color-warning-hover:    rgba(240, 192, 96, 0.10)
--k10-color-warning-pressed:  rgba(240, 192, 96, 0.20)
--k10-color-warning-focus:    rgba(240, 192, 96, 0.35)
--k10-color-warning-subtle:   rgba(240, 192, 96, 0.06)

/* INFO */
--k10-color-info:             #6BB4E8
--k10-color-info-text:        #0A1A2D
--k10-color-info-hover:       rgba(107, 180, 232, 0.10)
--k10-color-info-pressed:     rgba(107, 180, 232, 0.20)
--k10-color-info-focus:       rgba(107, 180, 232, 0.35)
--k10-color-info-subtle:      rgba(107, 180, 232, 0.06)

/* NEUTRAL */
--k10-color-neutral:          #B8C0CC
--k10-color-neutral-text:     #0F1419
--k10-color-neutral-hover:    rgba(184, 192, 204, 0.10)
--k10-color-neutral-pressed:  rgba(184, 192, 204, 0.20)
--k10-color-neutral-focus:    rgba(184, 192, 204, 0.35)
--k10-color-neutral-subtle:   rgba(184, 192, 204, 0.06)
```

## Couleurs — Texte

```css
--k10-color-text:             #E8EDF5
--k10-color-text-secondary:   #A8B4C4
--k10-color-text-muted:       #68788C
--k10-color-text-disabled:    rgba(104, 120, 140, 0.40)
```

## Aliases courts

```css
--k10-primary:          var(--k10-color-primary)
--k10-accent:           var(--k10-color-accent)
--k10-secondary:        var(--k10-color-secondary)
--k10-danger:           var(--k10-color-danger)
--k10-neutral:          var(--k10-color-neutral)
--k10-surface:          var(--k10-color-surface)
--k10-surface-raised:   var(--k10-color-surface-raised)
--k10-surface-elevated: var(--k10-color-surface-elevated)
--k10-surface-deep:     var(--k10-color-bg-deep)
--k10-text:             var(--k10-color-text)
--k10-text-secondary:   var(--k10-color-text-secondary)
--k10-text-muted:       var(--k10-color-text-muted)
--k10-border:           var(--k10-color-border)
```

## Glass Tokens

```css
--k10-glass-surface-bg: rgba(18, 29, 42, 0.65)    /* bottom-nav, FAB */
--k10-glass-raised-bg:  rgba(25, 37, 56, 0.70)    /* bottom-sheet handle */
--k10-glass-deep-bg:    rgba(33, 48, 71, 0.80)    /* scrim modal */
--k10-glass-border:     rgba(53, 74, 98, 0.50)
--k10-glass-blur-sm:    16px
--k10-glass-blur-md:    20px
--k10-glass-blur-lg:    24px
```

## Typographie

```css
/* Famille */
--k10-font-family: 'Manrope', 'Segoe UI', 'Roboto', sans-serif

/* Poids */
--k10-font-weight-regular:   400
--k10-font-weight-medium:    500
--k10-font-weight-semibold:  600
--k10-font-weight-bold:      700
--k10-font-weight-extrabold: 800
--k10-font-weight-black:     900

/* Scale */
--k10-font-size-display:    36px  / line-height: 44px
--k10-font-size-h1:         24px  / line-height: 32px
--k10-font-size-h2:         20px  / line-height: 28px
--k10-font-size-h3:         16px  / line-height: 24px
--k10-font-size-body-large: 18px  / line-height: 28px
--k10-font-size-body:       15px  / line-height: 22px
--k10-font-size-body-sm:    13px  / line-height: 20px
--k10-font-size-label:      11px  / line-height: 16px  / letter-spacing: 0.06em
--k10-font-size-caption:    10px  / line-height: 14px  / letter-spacing: 0.04em

/* Data scale (métriques santé) */
--k10-font-size-data-lg:    28px  / line-height: 36px
--k10-font-size-data-md:    22px  / line-height: 28px
--k10-font-size-data-sm:    18px  / line-height: 24px
```

**Classes typographiques CSS disponibles :**
`.text-k10-display`, `.text-k10-h1`, `.text-k10-h2`, `.text-k10-h3`, `.text-k10-body-large`, `.text-k10-body`, `.text-k10-body-sm`, `.text-k10-label`, `.text-k10-caption`, `.text-k10-data-lg`, `.text-k10-data-md`, `.text-k10-data-sm`

## Spacing (base 4px)

```css
--k10-space-0:    0
--k10-space-xs:   4px
--k10-space-sm:   8px
--k10-space-md:   12px
--k10-space-lg:   16px
--k10-space-xl:   24px
--k10-space-xxl:  32px
--k10-space-xxxl: 48px
--k10-space-4xl:  64px
--k10-space-5xl:  80px
--k10-space-6xl:  96px
```

## Border Radius

```css
--k10-radius-none: 0
--k10-radius-xs:   2px
--k10-radius-sm:   4px
--k10-radius-md:   8px
--k10-radius-lg:   12px
--k10-radius-xl:   16px
--k10-radius-2xl:  20px
--k10-radius-full: 9999px
```

## Shadows

```css
--k10-shadow-none:          none
--k10-shadow-sm:            0 1px 2px 0 rgba(0, 0, 0, 0.5)
--k10-shadow-md:            0 4px 6px -1px rgba(0, 0, 0, 0.6)
--k10-shadow-lg:            0 10px 15px -3px rgba(0, 0, 0, 0.7)
--k10-shadow-xl:            0 20px 25px -5px rgba(0, 0, 0, 0.8)
--k10-shadow-focus:         0 0 0 3px rgba(196, 217, 194, 0.35)
--k10-shadow-inset:         inset 0 2px 4px rgba(0, 0, 0, 0.5)
--k10-shadow-primary-glow:  0 0 12px 2px rgba(196, 217, 194, 0.18)
--k10-shadow-accent-glow:   0 0 12px 2px rgba(92, 158, 168, 0.25)
```

## Motion

```css
/* Durées */
--k10-duration-instant: 0ms
--k10-duration-fast:    120ms
--k10-duration-normal:  200ms
--k10-duration-slow:    300ms
--k10-duration-slower:  500ms
--k10-duration-lazy:    800ms

/* Easings */
--k10-easing-standard:   cubic-bezier(0.2, 0, 0, 1)
--k10-easing-decelerate: cubic-bezier(0, 0, 0, 1)
--k10-easing-accelerate: cubic-bezier(0.3, 0, 1, 1)
--k10-easing-spring:     cubic-bezier(0.34, 1.56, 0.64, 1)

/* Raccourcis */
--k10-transition:      all 200ms cubic-bezier(0.2, 0, 0, 1)
--k10-transition-fast: all 120ms cubic-bezier(0.2, 0, 0, 1)
--k10-transition-slow: all 300ms cubic-bezier(0.2, 0, 0, 1)
```

## Shell

```css
--k10-z-topbar:          50
--k10-z-nav:             100
--k10-topbar-height:     56px
--k10-bottom-nav-height: 48px
--k10-sidenav-width:     240px
```

## Aliases de compatibilité K-9 → K-10

```css
--k10-font-size-button:   var(--k10-font-size-h3)      /* button typo → h3 scale */
--k10-line-height-button: var(--k10-line-height-h3)
--k10-easing-emphasis:    var(--k10-easing-spring)      /* emphasis → spring */
--k10-color-surface-deep: var(--k10-color-bg-deep)      /* surface-deep → bg-deep */
--k10-duration-fastest:   var(--k10-duration-fast)      /* fastest supprimé → fast */
```

---

## Classes Tailwind K-10

Source de vérité : `libs/ui/tailwind.config.js`

**Couleurs** : `bg-k10-bg`, `bg-k10-surface`, `bg-k10-surface-raised`, `bg-k10-surface-elevated`, `text-k10-text`, `text-k10-text-secondary`, `text-k10-text-muted`, `border-k10-border`, `bg-k10-primary`, `text-k10-primary`, `bg-k10-accent`, `text-k10-accent`, `bg-k10-secondary`, `bg-k10-danger`, `bg-k10-success`, `bg-k10-warning`, `bg-k10-info`, `bg-k10-neutral`, + variants `-hover`, `-pressed`, `-subtle` pour chaque rôle

**Spacing** : `p-k10-xs`, `p-k10-sm`, `p-k10-md`, `p-k10-lg`, `p-k10-xl`, `p-k10-xxl`, `p-k10-xxxl`, `gap-k10-*`, `m-k10-*`

**Radius** : `rounded-k10-xs`, `rounded-k10-sm`, `rounded-k10-md`, `rounded-k10-lg`, `rounded-k10-xl`, `rounded-k10-2xl`, `rounded-k10-full`

**Shadows** : `shadow-k10-sm`, `shadow-k10-md`, `shadow-k10-lg`, `shadow-k10-xl`, `shadow-k10-focus`, `shadow-k10-primary-glow`, `shadow-k10-accent-glow`

**Durées** : `duration-k10-fast`, `duration-k10-normal`, `duration-k10-slow`

**Font sizes** : `text-k10-display`, `text-k10-h1`, `text-k10-h2`, `text-k10-h3`, `text-k10-body-large`, `text-k10-body`, `text-k10-body-sm`, `text-k10-label`, `text-k10-caption`, `text-k10-data-lg`, `text-k10-data-md`, `text-k10-data-sm`
