import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";

export const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

interface StoreProvderProps {
  cbildren: ReactNode;
};
export const StoreProvder = ({ cbildren }: StoreProvderProps) => {
  return (
    <Provider store={store}>
      {cbildren}
    </Provider>
  );
};