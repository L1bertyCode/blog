import { useTheme } from "@/app/providers/ThemeProvider";
import ThemeIcon from "@/shared/assets/icons/theme.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppIcon } from "@/shared/ui/AppIcon/AppIcon";

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
      <AppIcon
        Svg={ThemeIcon}
        className={s.theme}
      />
    </AppButton>
  );
};