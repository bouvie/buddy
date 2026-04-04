import { Component, ChangeDetectionStrategy, input, output, model, computed } from '@angular/core';
import type { StepsStep, StepsOrientation } from './stepper.types';
import { STEPS_ORIENTATIONS } from './stepper.types';

@Component({
  selector: 'k10-steps',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  readonly steps       = input<StepsStep[]>([]);
  readonly activeStep  = model(0);
  readonly orientation = input<StepsOrientation>('horizontal');

  readonly stepChanged = output<number>();

  readonly safeOrientation = computed<StepsOrientation>(() => {
    const o = this.orientation();
    return STEPS_ORIENTATIONS.includes(o) ? o : 'horizontal';
  });

  stepStatus(index: number): 'completed' | 'error' | 'active' | 'upcoming' {
    const step = this.steps()[index];
    if (step?.error)     return 'error';
    if (step?.completed) return 'completed';
    if (index === this.activeStep()) return 'active';
    return 'upcoming';
  }

  goTo(index: number): void {
    const step = this.steps()[index];
    if (step?.error || !step?.completed && index > this.activeStep()) return;
    this.activeStep.set(index);
    this.stepChanged.emit(index);
  }
}
