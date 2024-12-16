import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./Sidebar.module.scss";
import { useState } from "react";
import { routesConfig } from "@/shared/config/routesConfig/routesConfig";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/feature/ThemeSwitcher";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { LangSwitcher } from "@/feature/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
interface SidebarProps {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const { t } = useTranslation();
  return (
    <div className={classNames(s.sidebar, { [s.collapsed]: collapsed }, [className])}>
      <nav>
        {Object.values(routesConfig).map((r) => (
          r.name && <AppLink
            key={r.path}
            className={s.link}
            to={r.path || "/"}
          >
            {`${t(r.name)}`}
          </AppLink>
        ))}
      </nav>
      <AppButton
        className={s.btn}
        onClick={() => {
          setCollapsed((prev) => !prev);
        }
        }
      >
        {collapsed ? ">" : "<"}
      </AppButton>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

