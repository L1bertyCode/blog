import { useState } from "react";
import s from "./Counter.module.scss";
interface CounterProps { };
export const Counter = ({ }: CounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <div className={s.counter}>
      <h1 style={{ color: "green" }}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};