import { Suspense, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { NotFoundPage } from "@/pages/NotFoundPage";
import { MainPage } from "@/pages/MianPage";
import { ArticlesListPage } from "@/pages/ArticlesListPage";

import "./styles/index.scss";

export function App() {
 const [theme, setTheme] = useState<
  "app_light_theme" | "app_dark_theme"
 >("app_light_theme");
 return (
  <div className={`app ${theme}`}>
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
   <button
    onClick={() =>
     setTheme(
      theme === "app_light_theme"
       ? "app_dark_theme"
       : "app_light_theme"
     )
    }
   >
    change theme
   </button>
  </div>
 );
}
