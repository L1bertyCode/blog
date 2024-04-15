import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/const";
import {
 Theme,
 ThemeContext,
} from "@/shared/context/ThemeContext";
import {
 ReactNode,
 useEffect,
 useMemo,
 useState,
} from "react";

interface ThemeProviderProps {
 children?: ReactNode;
 initialTheme?: Theme;
}
const defaultTheme =
 (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ||
 Theme.DARK;

export const ThemeProvider = ({
 children,
 initialTheme,
}: ThemeProviderProps) => {
 const [theme, setTheme] = useState<Theme>(
  initialTheme || defaultTheme
 );
 useEffect(() => {
  document.body.className = `app_${theme}_theme`;
 }, [theme]);
 const defaultValue = useMemo(
  () => ({
   theme,
   setTheme: setTheme,
  }),
  [theme]
 );
 return (
  <ThemeContext.Provider value={defaultValue}>
   {children}
  </ThemeContext.Provider>
 );
};
