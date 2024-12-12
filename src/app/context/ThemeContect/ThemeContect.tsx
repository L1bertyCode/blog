import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark"
}
export const LOCAL_STORAGE_THEME_KEY = "theme";

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}
export const ThemeContect = createContext<ThemeContextProps>({});
