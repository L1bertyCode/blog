import { configureStore, EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction } from '@reduxjs/toolkit';
export function createReduxStore(): EnhancedStore<any, UnknownAction, Tuple<[StoreEnhancer<{
  dispatch: ThunkDispatch<any, undefined, UnknownAction>;
}>, StoreEnhancer]>> {
  return configureStore({
    reducer: {
    },
    devTools: __IS_DEV__
  });
}
