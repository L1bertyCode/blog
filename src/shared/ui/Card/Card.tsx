import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Card.module.scss";

export type CardColorType =
 | "clear"
 | "primary"
 | "secondary";
export type CardPadding = "0" | "8" | "16" | "24";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
 children: ReactNode;
 className?: string;
 colorType?: CardColorType;
 cardPadding?: CardPadding;
}
export const Card = (props: CardProps) => {
 const {
  className,
  children,
  colorType = "clear",
  cardPadding = "0",
  ...otherProps
 } = props;
 return (
  <div
   className={classNames(s.card, {}, [
    className,
    s[colorType],
   ])}
   {...otherProps}
  >
   {children}
  </div>
 );
};
