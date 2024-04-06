import { memo, useState } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Sidebar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangaugeSwitcher } from "@/widgets/LangaugeSwitcher";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface SidebarProps {
 className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
 const [collapsed, setCollapsed] = useState(false);
 const { className } = props;
 const { t } = useTranslation();
 const toggle = async () =>
  setCollapsed((prevState) => !prevState);
 return (
  <div
   data-testid="sidebar"
   className={classNames(
    s.sidebar,
    { [s.collapsed]: collapsed },
    [className]
   )}
  >
   <AppLink colorType="inverted" to="/">
    {t("Main")}
   </AppLink>
   <AppLink colorType="inverted" to="/articles">
    {t("Articles")}
   </AppLink>
   <Button
    data-testid="sidebar-toggle"
    className={s.collapsedBtn}
    onClick={toggle}
    variant="outlined"
    colorType="background"
   >
    {collapsed ? ">" : "<"}
   </Button>
   <div className={s.switcher}>
    <ThemeSwitcher />
    <LangaugeSwitcher />
   </div>
  </div>
 );
});
