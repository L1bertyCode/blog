import { Link } from "react-router-dom";
import s from "./App.module.scss";

import { useTheme } from "./providers/ThemeProvider";

import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router/AppRouter";

interface AppProps { };
export const App = ({ }: AppProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(`app app_${theme}_theme`, {}, [])}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={toggleTheme}>Theme</button>
      </nav>
      <AppRouter />
    </div>
  );
};
