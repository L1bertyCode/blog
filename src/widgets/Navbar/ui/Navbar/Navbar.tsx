import { Link } from "react-router-dom";
import { useTheme } from "@/app/providers/ThemeProvider";
import s from "./Navbar.module.scss";
import { routesConfig } from "@/shared/config/routesConfig/routesConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
};

export const Navbar = ({
  className
}: NavbarProps) => {
  const { toggleTheme } = useTheme();
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <AppLink to={"/"}>{"Logo"}</AppLink>
      <div>
        {Object.values(routesConfig).map((r) => (
          r.name && <AppLink className={s.link}
            to={r.path || "/"}
          >
            {r.name}</AppLink>
        ))}
        <button
          className={s.btn}
          onClick={toggleTheme}>Theme</button>
      </div>
    </div>
  );
};