import { FunctionComponent, SVGProps, memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Icon.module.scss";
type SvgProps = SVGProps<SVGElement>;
interface IconBaseProps extends SvgProps {
 className?: string;
 Svg: FunctionComponent<SVGProps<SVGElement>>;
}
interface ClickableIconProps extends IconBaseProps {
 onClick: () => void;
}

type IconProps = IconBaseProps | ClickableIconProps;
export const Icon = memo((props: IconProps) => {
 const { className, Svg, ...otherProps } = props;
 const icon = (
  <Svg
   {...otherProps}
   className={classNames(s.icon, {}, [className])}
  />
 );
 if (props.onClick) {
  <button className={s.btn}>{icon}</button>;
 } else {
  return icon;
 }
});
