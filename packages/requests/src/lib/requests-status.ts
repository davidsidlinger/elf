import {
  OrArray,
  propsFactory,
  Query,
  Reducer,
  select,
  StateOf,
  Store,
  StoreDef,
  coerceArray,
} from '@ngneat/elf';
import {
  defer,
  MonoTypeOperatorFunction,
  Observable,
  OperatorFunction,
} from 'rxjs';
import { tap } from 'rxjs/operators';

type StatusValue = Record<string | number, StatusState>;

export type StatusState = SuccessState | ErrorState | PendingState | IdleState;

export interface SuccessState {
  value: 'success';
}

export interface ErrorState {
  value: 'error';
  error: unknown;
}

export interface PendingState {
  value: 'pending';
}

export interface IdleState {
  value: 'idle';
}

export const {
  withRequestsStatus,
  updateRequestsStatus,
  selectRequestsStatus,
  resetRequestsStatus,
  getRequestsStatus,
  setRequestsStatus,
} = propsFactory('requestsStatus', {
  initialValue: {} as StatusValue,
});

export function selectRequestStatus<
  S extends StateOf<typeof withRequestsStatus>
>(
  key: string | number,
  options?: { groupKey?: string }
): OperatorFunction<S, StatusState> {
  return select((state) => {
    const base = getRequestStatus(key)(state);
    if (options?.groupKey) {
      const parent = getRequestStatus(options.groupKey)(state);
      return parent.value === 'success' ? parent : base;
    }

    return base;
  });
}

export function updateRequestStatus<
  S extends StateOf<typeof withRequestsStatus>
>(key: string | number, value: 'error', error: any): Reducer<S>;
export function updateRequestStatus<
  S extends StateOf<typeof withRequestsStatus>
>(
  key: string | number,
  value: Exclude<StatusState['value'], 'error'>,
  error?: any
): Reducer<S>;
export function updateRequestStatus<
  S extends StateOf<typeof withRequestsStatus>
>(key: string | number, value: any, error?: any): Reducer<S> {
  const base = {
    value,
  } as StatusState;

  if (value === 'error') {
    (base as ErrorState).error = error;
  }

  return updateRequestsStatus({
    [key]: base,
  });
}

export function getRequestStatus<S extends StateOf<typeof withRequestsStatus>>(
  key: string | number
): Query<S, StatusState> {
  return function (state: S) {
    return (
      getRequestsStatus(state)[key] ??
      ({
        value: 'pending',
      } as PendingState)
    );
  };
}

export function selectIsRequestPending<
  S extends StateOf<typeof withRequestsStatus>
>(key: string | number): OperatorFunction<S, boolean> {
  return select((state) => getRequestStatus(key)(state).value === 'pending');
}

export function trackRequestStatus<Keys extends string, T>(
  store: Store<StoreDef<StateOf<typeof withRequestsStatus>>>,
  key: Keys,
  options?: { mapError?: (error: any) => any; handleSuccess?: boolean }
): MonoTypeOperatorFunction<T> {
  return function (source: Observable<T>) {
    return defer(() => {
      if (store.query(getRequestStatus(key)).value !== 'pending') {
        store.update(updateRequestStatus(key, 'pending'));
      }

      return source.pipe(
        tap({
          next() {
            if (options?.handleSuccess) {
              store.update(updateRequestStatus(key, 'success'));
            }
          },
          error(error) {
            store.update(
              updateRequestStatus(
                key,
                'error',
                options?.mapError ? options?.mapError(error) : error
              )
            );
          },
        })
      );
    });
  };
}

export function initializeAsIdle(keys: OrArray<string>) {
  return coerceArray(keys).reduce((acc, key) => {
    acc[key] = {
      value: 'idle',
    };

    return acc;
  }, {} as Record<string, IdleState>);
}

// S extends StateOf<typeof withRequestsStatus>>(store: Store<StoreDef<S>>

export function bindTrackRequestStatus<Keys extends string>(store: Store<any>) {
  return function <T>(
    key: Keys,
    options?: Parameters<typeof trackRequestStatus>[2]
  ) {
    return trackRequestStatus<Keys, T>(store, key, options);
  };
}
