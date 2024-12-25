import { useState } from "react";
import s from "./Counter.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

interface CounterProps { };
export const Counter = ({ }: CounterProps) => {


  const increment = () => { };
  const decrement = () => { };
  return (
    <div className={s.counter}>
      <h1 style={{ color: "green" }}>{ }</h1>
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