import s from "./Navbar.module.scss";
import { routesConfig } from "@/shared/config/routesConfig/routesConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/feature/ThemeSwitcher";
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from "@/feature/LangSwitcher/LangSwitcher";


interface NavbarProps {
  className?: string;
};

export const Navbar = ({
  className
}: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <AppLink to={"/"}>{t("Logo")}</AppLink>

      <div>
        {Object.values(routesConfig).map((r) => (
          r.name && <AppLink
            key={r.path}
            className={s.link}
            to={r.path || "/"}
          >
            {r.name}</AppLink>
        ))}
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};