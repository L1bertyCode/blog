import { configureStore, EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
export function createReduxStore(initialState?: StateSchema): EnhancedStore<any, UnknownAction, Tuple<[StoreEnhancer<{
  dispatch: ThunkDispatch<any, undefined, UnknownAction>;
}>, StoreEnhancer]>> {
  return configureStore<StateSchema>({
    reducer: {
    },
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
