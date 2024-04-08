import { memo, useState } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Sidebar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LangaugeSwitcher } from "@/widgets/LangaugeSwitcher";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import MainIcon from "@/shared/assets/main-20-20.svg";
import ArticlesIcon from "@/shared/assets/article.svg";

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
   <nav>
    <AppLink
     className={s.link}
     colorType="inverted"
     to={RoutePath.main}
    >
     <MainIcon className={s.icon} />
     {!collapsed ? t("Main") : null}
    </AppLink>
    <AppLink
     className={s.link}
     colorType="inverted"
     to={RoutePath.articles}
    >
     <ArticlesIcon className={s.icon} />

     {!collapsed ? t("Articles") : null}
    </AppLink>
   </nav>
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
