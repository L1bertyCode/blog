import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";


interface StoreProvderProps {
  children: ReactNode;
  initialState?: StateSchema;
};
export const StoreProvder = ({
  children,
  initialState
}: StoreProvderProps) => {
  const store = createReduxStore(initialState);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};