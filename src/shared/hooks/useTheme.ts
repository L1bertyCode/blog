import { useContext } from "react";
import {
 Theme,
 ThemeContext,
} from "../context/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "../const/const";
interface UseThemeResult {
 theme: Theme;
 toggleTheme: () => void;
}
export const useTheme = (): UseThemeResult => {
 const { theme, setTheme } = useContext(ThemeContext);

 const toggleTheme = () => {
  let newTheme;
  switch (theme) {
   case Theme.LIGHT:
    newTheme = Theme.DARK;
    break;
   case Theme.DARK:
    newTheme = Theme.LIGHT;
    break;
   default:
    newTheme = Theme.DARK;
  }
  setTheme?.(newTheme);
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
 };
 return {
  theme: theme || Theme.DARK,
  toggleTheme,
 };
};
