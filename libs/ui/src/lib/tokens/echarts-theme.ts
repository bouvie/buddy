/**
 * Buddy Design System — ECharts Theme "k10"
 *
 * Mapping des tokens K-10 Deep Ocean Dark vers les valeurs ECharts.
 * ECharts ne peut pas lire les CSS custom properties à runtime,
 * ces valeurs sont donc synchronisées manuellement depuis variables.css.
 *
 * Enregistrement : echarts.registerTheme('k10', K10_ECHARTS_THEME)
 */

// ─── Tokens (sync depuis variables.css) ───────────────────────────────────────
const C = {
  primary:         '#C4D9C2',
  accent:          '#5C9EA8',
  secondary:       '#F4A86A',
  danger:          '#BF6868',
  success:         '#72C98A',
  warning:         '#F0C060',
  info:            '#6BB4E8',
  neutral:         '#B8C0CC',
  bg:              '#0C1219',
  surface:         '#121D2A',
  surfaceRaised:   '#192538',
  surfaceElevated: '#1E2F44',
  text:            '#E8EDF2',
  textSecondary:   '#B8C0CC',
  textMuted:       '#6B7A8C',
  border:          '#1D2A3A',
} as const;

export const K10_ECHARTS_THEME = {
  color: [C.primary, C.accent, C.secondary, C.info, C.success, C.warning, C.danger, C.neutral],
  backgroundColor: 'transparent',

  textStyle: {
    color:      C.textMuted,
    fontFamily: "'Manrope', 'Segoe UI', sans-serif",
    fontSize:   10,
  },

  grid: {
    borderColor: C.border,
  },

  line: {
    itemStyle:  { borderWidth: 2 },
    lineStyle:  { width: 2 },
    symbolSize: 4,
    symbol:     'circle',
    smooth:     true,
  },

  bar: {
    itemStyle: { barBorderRadius: 6 },
  },

  categoryAxis: {
    axisLine:  { show: false },
    axisTick:  { show: false },
    axisLabel: { color: C.textMuted, fontSize: 10 },
    splitLine: { show: false },
  },

  valueAxis: {
    axisLine:  { show: false },
    axisTick:  { show: false },
    axisLabel: { color: C.textMuted, fontSize: 10 },
    splitLine: { lineStyle: { color: C.border, type: 'dashed' } },
  },

  tooltip: {
    backgroundColor: C.surfaceElevated,
    borderColor:     C.border,
    borderWidth:     1,
    textStyle:       { color: C.text, fontSize: 12 },
    extraCssText:    'border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.6);',
  },

  legend: {
    textStyle: { color: C.textSecondary },
  },
} as const;

/** @deprecated Use K10_ECHARTS_THEME */
export const K9_ECHARTS_THEME = K10_ECHARTS_THEME;
