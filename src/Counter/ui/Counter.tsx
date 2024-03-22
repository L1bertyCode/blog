import { useState } from "react";
import s from "./Counter.module.scss";
type Props = {
 startCount?: number;
};

export function Counter({ startCount = 0 }: Props) {
 const [count, setCount] = useState<number>(startCount);
 return (
  <div>
   <h1 className={s.header}> {count}</h1>
   <button
    onClick={() => setCount((prevCount) => prevCount + 1)}
   >
    +
   </button>
  </div>
 );
}
