import { Link } from "react-router-dom";
import { useTheme } from "@/app/providers/ThemeProvider";
import s from "./Navbar.module.scss";
import { routesConfig } from "@/shared/config/routesConfig/routesConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/feature/ThemeSwitcher";

interface NavbarProps {
  className?: string;
};

export const Navbar = ({
  className
}: NavbarProps) => {

  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <AppLink to={"/"}>{"Logo"}</AppLink>
      <div>
        {Object.values(routesConfig).map((r) => (
          r.name && <AppLink
            key={r.path}
            className={s.link}
            to={r.path || "/"}
          >
            {r.name}</AppLink>
        ))}
        <ThemeSwitcher />
      </div>
    </div>
  );
};