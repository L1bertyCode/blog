import { Link } from "react-router-dom";
import { useTheme } from "@/app/providers/ThemeProvider";
import s from "./Navbar.module.scss";
import { routesConfig } from "@/shared/config/routesConfig/routesConfig";
import { classNames } from "@/shared/lib/classNames/classNames";

interface NavbarProps {
  className?: string;
};

export const Navbar = ({
  className
}: NavbarProps) => {
  const { toggleTheme } = useTheme();
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <Link to={"/"}>{"Logo"}</Link>
      <div>
        {Object.values(routesConfig).map((r) => (
          r.name && <Link to={r.path || "/"}>{r.name}</Link>
        ))}
        <button onClick={toggleTheme}>Theme</button>
      </div>
    </div>
  );
};