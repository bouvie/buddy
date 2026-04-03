import { Directive, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { map, scan, startWith } from 'rxjs/operators';
import type { ChartCardData, ChartDataPoint } from '@buddy/ui';
import { ChartCardComponent } from '@buddy/ui';

// ─── Configuration ────────────────────────────────────────────────────────────
/** Nombre de points visibles simultanément (fenêtre glissante de 30s) */
const WINDOW_SIZE = 30;
/** Intervalle de rafraîchissement en ms */
const TICK_MS = 1000;
/** Fréquence cardiaque de repos de référence (chien taille moyenne) */
const BASE_BPM = 78;

/**
 * Labels fixes pour l'axe X — ne changent jamais.
 * Clé de l'absence de scroll : ECharts perçoit un changement de VALEUR
 * à position constante → animation morphing in-place, pas de redraw.
 * Le tooltip affiche le temps relatif ("-15s : 82 BPM").
 */
const FIXED_LABELS: readonly string[] = Array.from({ length: WINDOW_SIZE }, (_, i) =>
  i === WINDOW_SIZE - 1 ? '0s' : `-${WINDOW_SIZE - 1 - i}s`,
);

// ─── Types internes ───────────────────────────────────────────────────────────
interface HeartbeatState {
  points: ChartDataPoint[];
  lastBpm: number;
  /** Compteur de ticks pour les fonctions oscillantes */
  tick: number;
}

// ─── Génération BPM physiologiquement réaliste ───────────────────────────────
/**
 * Simule les trois composantes de la variabilité cardiaque canine :
 * 1. Arythmie sinusale respiratoire (RSA) : le cœur accélère à l'inspiration
 *    et ralentit à l'expiration. Cycle respiratoire chien ≈ 3s (20 resp/min).
 * 2. Variabilité cardiaque à court terme (HRV) : bruit stochastique naturel.
 * 3. Mean reversion : dérive lente vers la baseline de repos.
 */
function nextBpm(prev: number, tick: number): number {
  const rsa = Math.sin((tick * 2 * Math.PI) / 3) * 4;
  const hrv = (Math.random() - 0.5) * 3;
  const reversion = (BASE_BPM - prev) * 0.06;
  return Math.round(Math.max(60, Math.min(105, prev + rsa * 0.4 + hrv + reversion)));
}

// ─── État initial ─────────────────────────────────────────────────────────────
/**
 * Pré-remplit la fenêtre avec un historique simulé pour éviter
 * le démarrage "à plat" — le graphe est plein dès l'affichage.
 * Les labels sont issus de FIXED_LABELS : l'axe X ne changera jamais.
 */
function buildInitialState(): HeartbeatState {
  let bpm = BASE_BPM;
  const points: ChartDataPoint[] = [];

  for (let i = 0; i < WINDOW_SIZE; i++) {
    bpm = nextBpm(bpm, i + 1);
    points.push({ label: FIXED_LABELS[i], value: bpm });
  }

  return { points, lastBpm: bpm, tick: WINDOW_SIZE };
}

// ─── Évolution de la fenêtre glissante ───────────────────────────────────────
/**
 * Fait glisser les valeurs d'un cran vers la gauche sur des positions fixes.
 * ECharts voit un changement de valeur à label constant → morphing in-place.
 */
function evolve(state: HeartbeatState): HeartbeatState {
  const newBpm = nextBpm(state.lastBpm, state.tick);
  return {
    points: [
      ...state.points.slice(1).map((p, i) => ({ label: FIXED_LABELS[i], value: p.value })),
      { label: FIXED_LABELS[WINDOW_SIZE - 1], value: newBpm },
    ],
    lastBpm: newBpm,
    tick: state.tick + 1,
  };
}

// ─── Directive ────────────────────────────────────────────────────────────────
@Directive({
  selector: 'k9-chart-card[appHeartRateChart]',
  standalone: true,
})
export class HeartRateChartDirective {
  private readonly host = inject(ChartCardComponent, { host: true });

  private readonly initial = buildInitialState();

  private readonly chartData = toSignal(
    interval(TICK_MS).pipe(
      scan((state) => evolve(state), this.initial),
      startWith(this.initial),
      map(
        (state): ChartCardData => ({
          variant: 'line-area',
          title: 'Rythme cardiaque',
          headerValue: String(state.lastBpm),
          unit: 'BPM',
          isLive: true,
          points: state.points,
        }),
      ),
    ),
    { requireSync: true },
  );

  constructor() {
    effect(() => this.host.data.set(this.chartData()));
  }
}
