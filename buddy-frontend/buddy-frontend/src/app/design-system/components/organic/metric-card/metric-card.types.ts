export type MetricCardVariant = 'active' | 'loading' | 'empty';
export type MetricTrendDirection = 'up' | 'down';

export const METRIC_CARD_VARIANTS = ['active', 'loading', 'empty'] as const;

export interface MetricCardData {
  variant: MetricCardVariant;
  label: string;
  value: string;
  unit: string;
  /** Pourcentage de tendance : positif = hausse, négatif = baisse */
  trend: number;
  /** Progression de la barre (0–100) */
  progress: number;
  emptyMessage?: string;
  /** Classe Font Awesome pour l'état vide (ex: "fa-solid fa-heart-pulse") */
  emptyIcon?: string;
}
