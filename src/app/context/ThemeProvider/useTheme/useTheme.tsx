import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContect } from "../ThemeContect/ThemeContect";

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}
export const useTheme = (): useThemeResult => {

  const { theme, setTheme } = useContext(ThemeContect);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  };
};