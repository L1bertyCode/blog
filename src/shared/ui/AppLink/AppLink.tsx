import { ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import s from "./AppLink.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

export enum AppLinkColorType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  INVERTED_PRIMARY = "invertedPrimary",
  INVERTED_SECONDARY = "invertedSecondary",
}

interface AppLinkProps extends LinkProps {
  children: ReactNode;
  colorType?: AppLinkColorType;
  className?: string;
};

export const AppLink = ({ children,
  to,
  colorType = AppLinkColorType.INVERTED_PRIMARY,
  className,
  ...oterProps
}: AppLinkProps) => {
  return (
    <Link
      to={to}
      className={classNames(s.appLink, {}, [s[colorType], className])}
      {...oterProps}
    >
      {children}
    </Link >
  );
};