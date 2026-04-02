export type ChartCardVariant = 'line-area' | 'bar' | 'skeleton' | 'empty';

export const CHART_CARD_VARIANTS = ['line-area', 'bar', 'skeleton', 'empty'] as const;

/** Un point de données transmis par la directive depuis le web service */
export interface ChartDataPoint {
  /** Valeur numérique (axe Y) */
  value: number;
  /** Label de l'axe X (ex: heure, intervalle, date) */
  label: string;
}

export interface ChartCardData {
  variant: ChartCardVariant;
  title?: string;
  /** Valeur agrégée affichée dans le header (ex: "1,240") */
  headerValue?: string;
  unit?: string;
  isLive?: boolean;
  /** Jeu de données typé — fourni par la directive depuis le web service */
  points?: ChartDataPoint[];
  emptyMessage?: string;
  /** Classe Font Awesome pour l'état vide */
  emptyIcon?: string;
}
