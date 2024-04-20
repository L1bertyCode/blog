import s from "./Counter.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slices/counterSlice";

export function Counter() {
 const value = useSelector(getCounterValue);
 const dispatch = useDispatch();

 const inc = () => {
  dispatch(counterActions.increment());
 };
 const dec = () => {
  dispatch(counterActions.decrement());
 };
 return (
  <div>
   <h1 className={s.header}> {value}</h1>
   <Button variant="outlined" onClick={inc}>
    +
   </Button>
   <Button variant="outlined" onClick={dec}>
    -
   </Button>
  </div>
 );
}
