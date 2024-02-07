import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Card.module.scss";

export type CardColorType =
 | "clear"
 | "primary"
 | "secondary";
export type CardPadding = "0" | "8" | "16" | "24";
export type CardRadius = "none" | "s" | "m" | "l" | "xl";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
 children: ReactNode;
 className?: string;
 colorType?: CardColorType;
 padding?: CardPadding;
 borderRadius?: CardRadius;
 width?: string;
 height?: string;
}
const mapPaddingToClass: Record<CardPadding, string> = {
 "0": "gap_0",
 "8": "gap_8",
 "16": "gap_16",
 "24": "gap_24",
};
const mapBorderRadiusToClass: Record<CardRadius, string> = {
 none: "radius_none",
 s: "radius_s",
 m: "radius_m",
 l: "radius_l",
 xl: "radius_xl",
};
export const Card = (props: CardProps) => {
 const {
  className,
  children,
  colorType = "primary",
  padding = "8",
  borderRadius = "m",
  width,
  height,
  ...otherProps
 } = props;
 const paddingClass = mapPaddingToClass[padding];
 const borderRadiusClass =
  mapBorderRadiusToClass[borderRadius];
 return (
  <div
   className={classNames(s.card, {}, [
    className,
    s[colorType],
    s[paddingClass],
    s[borderRadiusClass],
   ])}
   {...otherProps}
  >
   {children}
  </div>
 );
};
