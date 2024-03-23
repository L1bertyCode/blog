import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import ThemeIcon from "@/shared/assets/theme.svg";
import s from "./ThemeSwitcher.module.scss";
import { useTheme } from "@/shared/hooks/useTheme";
import { Button } from "@/shared/ui/Button/Button";

interface ThemeSwitcherProps {
 className?: string;
}

export const ThemeSwitcher = memo(
 (props: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const { className } = props;
  return (
   <Button
    onClick={toggleTheme}
    className={classNames(s.themeSwitcher, {}, [className])}
   >
    <ThemeIcon />
   </Button>
  );
 }
);
