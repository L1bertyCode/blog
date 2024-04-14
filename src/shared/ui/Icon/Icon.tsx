import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Icon.module.scss";
import { FunctionComponent, SVGAttributes } from "react";
type IconColorType =
 | "primary"
 | "secondary"
 | "primaryInverted"
 | "background"
 | "backgroundInverted";
interface IconProps {
 Svg: FunctionComponent<SVGAttributes<SVGElement>>;
 className?: string;
 width?: string;
 height?: string;
 viewBox?: string;
 colorType?: IconColorType;
}

export const Icon = (props: IconProps) => {
 const {
  Svg,
  className,
  colorType = "primary",
  ...otherProps
 } = props;
 return (
  <Svg
   {...otherProps}
   className={classNames(s.icon, {}, [
    className,
    s[colorType],
   ])}
  />
 );
};
