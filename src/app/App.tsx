import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { NotFoundPage } from "@/pages/NotFoundPage";
import { MainPage } from "@/pages/MianPage";
import { ArticlesListPage } from "@/pages/ArticlesListPage";

import "./styles/index.scss";
import {
 Theme,
 ThemeContext,
} from "@/shared/context/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/const";
import { useTheme } from "@/shared/hooks/useTheme";
import { classNames } from "@/shared/lib/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "@/widjets/Navbar";
import { ThemeSwitcher } from "@/widjets/ThemeSwitcher";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { Sidebar } from "@/widjets/Sidebar";

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
