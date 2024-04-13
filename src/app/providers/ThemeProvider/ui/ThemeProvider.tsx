import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/const";
import {
 Theme,
 ThemeContext,
} from "@/shared/context/ThemeContext";
import { ReactNode, useMemo, useState } from "react";

interface ThemeProviderProps {
 children?: ReactNode;
}
const defaultTheme =
 (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ||
 Theme.DARK;

export const ThemeProvider = ({
 children,
}: ThemeProviderProps) => {
 const [theme, setTheme] = useState<Theme>(defaultTheme);

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
