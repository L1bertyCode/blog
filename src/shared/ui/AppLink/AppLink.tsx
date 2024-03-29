import { ReactNode, memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
type ColorType = "primary" | "secodary";
interface AppLinkProps extends LinkProps {
 className?: string;
 children: ReactNode;
 to: string;
 colorType?: ColorType;
}

export const AppLink = memo((props: AppLinkProps) => {
 const {
  className,
  to = "/",
  children,
  colorType = "primary",
  ...otherProps
 } = props;
 return (
  <Link
   {...otherProps}
   to={to}
   className={classNames(s.appLink, {}, [
    className,
    s[colorType],
   ])}
  >
   {children}
  </Link>
 );
});
