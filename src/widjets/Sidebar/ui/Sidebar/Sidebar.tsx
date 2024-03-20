import { memo, useState } from "react";

import { classNames } from "@/shared/lib/classNames";

import s from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/widjets/ThemeSwitcher";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Button } from "@/shared/ui/Button/Button";

interface SidebarProps {
 className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
 const [collapsed, setCollapsed] = useState(false);
 const { className } = props;
 return (
  <div
   className={classNames(
    s.sidebar,
    { [s.collapsed]: collapsed },
    [className]
   )}
  >
   <AppLink to="/">MainPage</AppLink>
   <AppLink to="/articles">Articles</AppLink>
   <Button
   className={s.collapsedBtn}
    onClick={() => setCollapsed((prevState) => !prevState)}
    variant="outlined"
   >
    {collapsed ? ">" : "<"}
   </Button>
   <div className={s.switcher}>
    <ThemeSwitcher />
   </div>
  </div>
 );
});
