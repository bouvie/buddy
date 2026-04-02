/**
 * Buddy Design System — ECharts Theme "k9"
 *
 * Mapping des tokens CSS vers les valeurs ECharts.
 * ECharts ne peut pas lire les CSS custom properties à runtime,
 * ces valeurs sont donc synchronisées manuellement depuis variables.css.
 *
 * Enregistrement : echarts.registerTheme('k9', K9_ECHARTS_THEME)
 */

// ─── Tokens (sync depuis variables.css) ───────────────────────────────────────
const C = {
  primary:        '#BACBB8',
  secondary:      '#FFB5A1',
  danger:         '#FFB4AB',
  neutral:        '#C4C8C0',
  bg:             '#0F1419',
  surface:        '#1B2025',
  surfaceRaised:  '#252A30',
  surfaceElevated:'#30353A',
  text:           '#DEE3E9',
  textSecondary:  '#C4C8C0',
  textMuted:      '#8E928B',
  border:         '#434842',
} as const;

export const K9_ECHARTS_THEME = {
  color: [C.primary, C.secondary, C.neutral, C.danger],
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
    itemStyle: { barBorderRadius: 4 },
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
    backgroundColor:  C.surfaceElevated,
    borderColor:      C.border,
    borderWidth:      1,
    textStyle:        { color: C.text, fontSize: 12 },
    extraCssText:     'border-radius: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.5);',
  },

  legend: {
    textStyle: { color: C.textSecondary },
  },
} as const;
