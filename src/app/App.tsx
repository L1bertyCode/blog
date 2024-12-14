import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router/AppRouter";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./App.module.scss";
import { Navbar } from "@/widgets/Navbar";


interface AppProps { };
export const App = ({ }: AppProps) => {
  const { theme } = useTheme();

  return (
    <div className={classNames(`app app_${theme}_theme`, {}, [])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
