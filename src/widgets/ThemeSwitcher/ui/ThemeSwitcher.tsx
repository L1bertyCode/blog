import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import ThemeIcon from "@/shared/assets/theme.svg";

import { useTheme } from "@/shared/hooks/useTheme";
import { Button } from "@/shared/ui/Button/Button";
import { Icon } from "@/shared/ui/Icon/Icon";

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
    className={classNames("", {}, [className])}
   >
    <Icon colorType="background" Svg={ThemeIcon} />
   </Button>
  );
 }
);
