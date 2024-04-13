import { ReactNode, memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
type AppLinkColorType =
 | "primary"
 //  | "secondary"
 | "inverted";
//  | "background"
//  | "backgroundInverted";
type AppLinkVariant = "clear";
interface AppLinkProps extends LinkProps {
 className?: string;
 children: ReactNode;
 to: string;
 colorType?: AppLinkColorType;
 variant?: AppLinkVariant;
}

export const AppLink = memo((props: AppLinkProps) => {
 const {
  className,
  to = "/",
  children,
  colorType = "primary",
  variant = "clear",
  ...otherProps
 } = props;
 return (
  <Link
   {...otherProps}
   to={to}
   className={classNames(s.appLink, {}, [
    className,
    s[colorType],
    s[variant],
   ])}
  >
   {children}
  </Link>
 );
});
