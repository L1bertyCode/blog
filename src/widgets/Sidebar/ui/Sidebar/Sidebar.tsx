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
import { Icon } from "@/shared/ui/Icon/Icon";
import { Text } from "@/shared/ui/Text/Text";

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
     colorType="inverted"
     className={s.link}
     to={RoutePath.main}
    >
     <Icon Svg={MainIcon} colorType="inverted" />
     <Text
      className={s.text}
      text={t("Main")}
      colorType="inverted"
     />
    </AppLink>
    <AppLink
     colorType="inverted"
     className={s.link}
     to={RoutePath.articles}
    >
     <Icon
      Svg={ArticlesIcon}
      viewBox="5 5 20 20"
      width="20px"
      height="20px"
      colorType="inverted"
     />
     <Text
      className={s.text}
      text={t("Articles")}
      colorType="inverted"
     />
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
