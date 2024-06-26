import { useTheme } from "@/shared/hooks/useTheme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widgets/Navbar";

import { MainLayout } from "@/shared/layouts/MainLayout";
import { Sidebar } from "@/widgets/Sidebar";
import "./styles/index.scss";

export function App() {
 const { theme } = useTheme();


 return (
  <MainLayout
   className={classNames("app", {}, [`app_${theme}_theme`])}
   header={<Navbar />}
   sidebar={<Sidebar />}
   main={<AppRouter />}
  />
 );
}
