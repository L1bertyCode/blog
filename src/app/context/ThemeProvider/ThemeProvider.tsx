import { ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContect } from "../ThemeContect/ThemeContect";
import { Theme } from "../ThemeContect/ThemeContect";

interface ThemeProviderProps {
  children: ReactNode;

};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT);

  const defaultProps = useMemo(() => (
    {
      theme: theme,
      setTheme: setTheme
    }
  ), [theme]);

  return (
    <ThemeContect.Provider value={defaultProps}>
      {children}
    </ThemeContect.Provider>
  );
};