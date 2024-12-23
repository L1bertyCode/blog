import { useContext, useEffect } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContect } from "../ThemeContect/ThemeContect";

interface useThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}
export const useTheme = (): useThemeResult => {

  const { theme, setTheme } = useContext(ThemeContect);

  useEffect(() => {
    document.body.className = `app_${theme}_theme`;
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    document.body.className = `app_${newTheme}_theme`;
  };
  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  };
};