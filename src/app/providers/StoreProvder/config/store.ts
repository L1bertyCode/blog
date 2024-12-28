import { configureStore, EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
export function createReduxStore(initialState?: StateSchema): EnhancedStore<any, UnknownAction, Tuple<[StoreEnhancer<{
  dispatch: ThunkDispatch<any, undefined, UnknownAction>;
}>, StoreEnhancer]>> {

  const rootReducers = {
    counter: counterReducer,
    user: userReducer

  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState
  });
}

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

