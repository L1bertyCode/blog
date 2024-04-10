import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Icon.module.scss";
import { FunctionComponent, SVGAttributes } from "react";

interface IconProps {
 Svg: FunctionComponent<SVGAttributes<SVGElement>>;
 className?: string;
 width?: string;
 height?: string;
 viewBox?: string;
}

export const Icon = (props: IconProps) => {
 const {
  Svg,
  className,
  width = "20px",
  height = "20px",
  viewBox = "0 0 20 20",
  ...otherProps
 } = props;
 return (
  <Svg
   {...otherProps}
   width={width}
   height={height}
   viewBox={viewBox}
   className={classNames(s.icon, {}, [className])}
  />
 );
};
