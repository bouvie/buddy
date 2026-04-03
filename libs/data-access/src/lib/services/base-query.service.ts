import { Injectable, Signal, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { Observable, catchError, map, of, startWith } from 'rxjs';

export interface QueryState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const LOADING_STATE = <T>(): QueryState<T> => ({ data: null, loading: true, error: null });

@Injectable()
export abstract class BaseQueryService {
  private readonly destroyRef = inject(DestroyRef);

  /**
   * Transforme un Observable (Apollo watchQuery, subscription, etc.) en Signal<QueryState<T>>.
   * - takeUntilDestroyed : évite les memory leaks sur les observables long-lived
   * - catchError : capture les erreurs réseau sans casser le Signal
   * - requireSync : safe car on émet { loading: true } de façon synchrone
   */
  protected queryToSignal<T>(source$: Observable<T>): Signal<QueryState<T>> {
    const wrapped$ = new Observable<QueryState<T>>((observer) => {
      observer.next(LOADING_STATE());

      source$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (data) => observer.next({ data, loading: false, error: null }),
        error: (err: unknown) =>
          observer.next({
            data: null,
            loading: false,
            error: err instanceof Error ? err : new Error(String(err)),
          }),
      });
    });

    return toSignal(wrapped$, { requireSync: true });
  }

  /**
   * Version simplifiée pour les observables qui complètent (ex: one-shot query sans cache).
   * Utilise startWith pour le state de loading.
   */
  protected queryToSignalSimple<T>(source$: Observable<T>): Signal<QueryState<T>> {
    return toSignal(
      source$.pipe(
        takeUntilDestroyed(this.destroyRef),
        map((data): QueryState<T> => ({ data, loading: false, error: null })),
        catchError(
          (err: unknown): Observable<QueryState<T>> =>
            of({
              data: null,
              loading: false,
              error: err instanceof Error ? err : new Error(String(err)),
            }),
        ),
        startWith<QueryState<T>>({ data: null, loading: true, error: null }),
      ),
      { requireSync: true },
    );
  }
}
