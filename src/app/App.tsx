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
import { classNames } from "@/shared/hooks/classNames";

export function App() {
 const { theme, toggleTheme } = useTheme();

 return (
  <div
   className={classNames("app", {}, [`app_${theme}_theme`])}
  >
   <Link to="/">MainPage</Link>
   <Link to="/articles">Articles</Link>

   <Suspense fallback={<div>Loading...</div>}>
    <Routes>
     <Route path="/" element={<MainPage />} />
     <Route
      path="/articles"
      element={<ArticlesListPage />}
     />
     <Route path="*" element={<NotFoundPage />} />
    </Routes>
   </Suspense>
   <button onClick={toggleTheme}>change theme</button>
  </div>
 );
}
