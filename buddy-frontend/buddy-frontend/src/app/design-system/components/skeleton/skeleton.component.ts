import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import type { SkeletonShape } from './skeleton.types';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css'],
})
export class SkeletonComponent {
  readonly shape = input<SkeletonShape>('rectangle');
  readonly count = input(1);

  readonly countArray = computed(() =>
    Array.from({ length: this.count() }, (_, i) => i)
  );
}
