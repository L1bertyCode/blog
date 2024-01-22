import {
 ReducersMapObject,
 configureStore,
} from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "@/entities/Counter";
import { userReducer } from "@/entities/User";

import { createReducerManager } from "./reducerManager";
import { $api } from "@/shared/api/api";

import { profileReducer } from "@/entities/Profile/model/slices/profileSlice";
import { articleDetailsCommentsReducer } from "@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice";

export function createReduxStore(
 initialState?: StateSchema,
 asyncReducers?: ReducersMapObject<StateSchema>
) {
 //@ts-ignore
 const rootReducers: ReducersMapObject<StateSchema> = {
  ...asyncReducers,
  counter: counterReducer,
  user: userReducer,
  profile: profileReducer,
 };
 const reducerManager = createReducerManager(rootReducers);

 const store = configureStore({
  reducer: reducerManager.reduce,
  devTools: __IS_DEV__,
  preloadedState: initialState,

  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware({
    thunk: {
     extraArgument: {
      api: $api,
     },
    },
   }),
 });
 //@ts-ignore
 store.reducerManager = reducerManager;
 return store;
}

export type AppDispatch = ReturnType<
 typeof createReduxStore
>["dispatch"];
