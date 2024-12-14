import { useTheme } from "@/app/providers/ThemeProvider";
import ThemeIcon from "@/shared/assets/icons/theme.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

interface ThemeSwitcherProps {
  className?: string;
};
export const ThemeSwitcher = ({
  className
}: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  return (
    <AppButton
      className={classNames(s.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon
        className={s.theme}
      />
    </AppButton>
  );
};