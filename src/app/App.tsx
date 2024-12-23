import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router/AppRouter";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./App.module.scss";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense } from "react";

import { MainLayout } from "@/shared/layouts/MainLayout";


interface AppProps { };
export const App = ({ }: AppProps) => {

  const { theme } = useTheme();

  return (
    <div className={classNames(`app app_${theme}_theme`, {}, [])}>
      <Suspense fallback={<></>}>
        <MainLayout
          header={<Navbar/>}
          main={<AppRouter />}
          sidebar={<Sidebar />}
        />
      </Suspense>
    </div>
  );
};
