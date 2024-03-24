import { ButtonHTMLAttributes, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Button.module.scss";
type ButtonVariant =
 | "clear"
 | "filled"
 | "outlined"
 | "outlined-inverted";
interface ButtonProps
 extends ButtonHTMLAttributes<HTMLButtonElement> {
 children: ReactNode;
 className?: string;
 variant?: ButtonVariant;
}

export const Button = (props: ButtonProps) => {
 const {
  children,
  onClick,
  variant = "clear",
  className,
  ...otherProps
 } = props;
 return (
  <button
   {...otherProps}
   onClick={onClick}
   className={classNames(s.button, {}, [
    className,
    s[variant],
   ])}
  >
   {children}
  </button>
 );
};
