import { useState } from "react";
import s from "./Counter.module.scss";
type Props = {};

export function Counter({}: Props) {
 const [count, setCount] = useState<number>(0);
 return (
  <div>
   Counter
   <h1 className={s.header}> {count}</h1>
   <button
    onClick={() => setCount((prevCount) => prevCount + 1)}
   >
    increment
   </button>
  </div>
 );
}
