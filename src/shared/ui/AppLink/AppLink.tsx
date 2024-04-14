import { ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
type AppLinkColorType =
 | "primary"
 //  | "secondary"
 | "primaryInverted";
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

export const AppLink = (props: AppLinkProps) => {
 const {
  className,
  to = "/",
  children,
  colorType = "primary",
  variant = "clear",
  ...otherProps
 } = props;
 //  const { pathname } = useLocation();
 //  console.log(pathname, to);

 return (
  <Link
   {...otherProps}
   to={to}
   className={classNames(
    s.appLink,
    {
     //  [s.active]: pathname === to,
    },
    [className, s[colorType], s[variant]]
   )}
  >
   {children}
  </Link>
 );
};
