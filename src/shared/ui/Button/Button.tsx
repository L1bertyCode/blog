import { ButtonHTMLAttributes, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Button.module.scss";
type ButtonVariant = "clear" | "outlined";
type ButtonColorType =
 | "primary"
 | "secondary"
 | "inverted"
 | "background"
 | "backgroundInverted";
interface ButtonProps
 extends ButtonHTMLAttributes<HTMLButtonElement> {
 children: ReactNode;
 className?: string;
 variant?: ButtonVariant;
 colorType?: ButtonColorType;
}

export const Button = (props: ButtonProps) => {
 const {
  children,
  onClick,
  variant = "clear",
  colorType = "primary",
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
    s[colorType],
   ])}
  >
   {children}
  </button>
 );
};
