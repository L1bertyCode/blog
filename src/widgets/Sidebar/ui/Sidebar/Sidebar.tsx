import { SIDEBAR_COLLAPSED_KEY } from "@/shared/const/localstorage";
import s from "./Sidebar.module.scss";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/features/LanguageSwitcher";

import { SidebarItem } from "../SidebarItem/SidebarItem";
import { getSideBarItems } from "../../model/selectores/getSideBarItems";
import { useSelector } from "react-redux";

interface SidebarProps {
 className?: string;
}
const defaultCollpased =
 localStorage.getItem(SIDEBAR_COLLAPSED_KEY) === "true"
  ? true
  : false || false;
export function Sidebar(props: SidebarProps) {
 const { t } = useTranslation();
 const { className } = props;
 const [collapsed, setCollapsed] = useState(
  defaultCollpased
 );
 const changeCollapse = () => {
  setCollapsed((prevState) => !prevState);
  localStorage.setItem(
   SIDEBAR_COLLAPSED_KEY,
   (!collapsed).toString()
  );
 };
 const sidebarItemsList = useSelector(getSideBarItems);
 return (
  <div
   data-testid="sidebar"
   className={classNames(
    s.sidebar,
    {
     [s.collapsed]: collapsed,
    },
    [className]
   )}
  >
   <div className={s.links}>
    {sidebarItemsList.map((listItem) => (
     <SidebarItem
      key={listItem.path}
      className={s.link}
      collapsed={collapsed}
      item={listItem}
     />
    ))}
   </div>
   <Button
    data-testid="sidebar-toggle"
    variant="outlined-inverted"
    onClick={changeCollapse}
    className={s.btnCollapsed}
   >
    {collapsed ? ">" : "<"}
   </Button>
   <div className={s.switchers}>
    <ThemeSwitcher />
    <LanguageSwitcher collapsed={collapsed} />
   </div>
  </div>
 );
}
