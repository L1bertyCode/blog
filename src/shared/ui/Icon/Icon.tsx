import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Icon.module.scss";
import { FunctionComponent, SVGAttributes } from "react";

interface IconProps {
 Svg: FunctionComponent<SVGAttributes<SVGElement>>;
 className?: string;
 width?: string;
 height?: string;
}

export const Icon = (props: IconProps) => {
 const {
  Svg,
  className,
  width = "20px",
  height = "20px",
 } = props;
 return (
  <Svg
   width={width}
   height={height}
   className={classNames(s.icon, {}, [className])}
  />
 );
};
