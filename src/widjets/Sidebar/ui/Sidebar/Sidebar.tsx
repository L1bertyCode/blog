import { memo, useState } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/widjets/ThemeSwitcher";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Button } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { LangaugeSwitcher } from "@/widjets/LangaugeSwitcher";

interface SidebarProps {
 className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
 const [collapsed, setCollapsed] = useState(false);
 const { className } = props;
 const { t } = useTranslation();

 return (
  <div
   className={classNames(
    s.sidebar,
    { [s.collapsed]: collapsed },
    [className]
   )}
  >
   <AppLink to="/">{t("Main")}</AppLink>
   <AppLink to="/articles">{t("Articles")}</AppLink>
   <Button
    className={s.collapsedBtn}
    onClick={() => setCollapsed((prevState) => !prevState)}
    variant="outlined"
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
