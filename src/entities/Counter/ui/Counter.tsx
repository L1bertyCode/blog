import { useState } from "react";
import s from "./Counter.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCountValue } from "../model/selectors/getCountValue";
import { counterActions } from "../model/slices/counterSlice";
type Props = {
 startCount?: number;
};

export function Counter({ startCount = 0 }: Props) {
 const value = useSelector(getCountValue);
 const dispatch = useDispatch();

 const [count, setCount] = useState<number>(startCount);
 const inc = () => {
  setCount((prevCount) => prevCount + 1);
  dispatch(counterActions.increment());
 };
 const dec = () => {
  setCount((prevCount) => prevCount - 1);
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
