import { memo } from "react";

import s from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { Link } from "react-router-dom";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
 className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
 const { className } = props;
 return (
  <div className={classNames(s.navbar, {}, [className])}>
   <AppLink to="/">Logo</AppLink>
   <div>
    <AppLink to="/">MainPage</AppLink>
    <AppLink to="/articles">Articles</AppLink>
   </div>
  </div>
 );
});
