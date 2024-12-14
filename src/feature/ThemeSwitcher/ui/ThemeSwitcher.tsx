import { useTheme } from "@/app/providers/ThemeProvider";
import ThemeIcon from "@/shared/assets/icons/theme.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
};
export const ThemeSwitcher = ({
  className
}: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  return (
    <button
      className={classNames(s.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon
className={s.theme}
      />
    </button>
  );
};