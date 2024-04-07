import { memo } from "react";

import s from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

interface NavbarProps {
 className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
 const { className } = props;
 const { t } = useTranslation();
 return (
  <div className={classNames(s.navbar, {}, [className])}>
   <AppLink colorType="inverted" to="/">
    +
   </AppLink>
   <div>/</div>
  </div>
 );
});
