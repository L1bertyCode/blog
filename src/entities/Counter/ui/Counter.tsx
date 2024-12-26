import s from "./Counter.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slices/counterSlice";
import { StateSchema } from "@/app/providers/StoreProvder/config/StateSchema";

interface CounterProps { };
export const Counter = ({ }: CounterProps) => {
  const dispatch = useDispatch();

  const counterValue = useSelector((state: StateSchema) => state.counter.value);
  
  const increment = () => { dispatch(counterActions.increment()); };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={s.counter}>
      <h1 style={{ color: "green" }}>{counterValue}</h1>
      <AppButton
        colorType="backgroundInverted"
        onClick={increment}>
        Increment
      </AppButton>
      <AppButton
        colorType="backgroundInverted"
        onClick={decrement}>
        Decrement
      </AppButton>
    </div>
  );
};