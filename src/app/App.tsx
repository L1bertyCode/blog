import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { NotFoundPage } from "@/pages/NotFoundPage";
import { MainPage } from "@/pages/MianPage";
import { ArticlesListPage } from "@/pages/ArticlesListPage";

import "./styles/index.scss";
import { Link } from "react-router-dom";

export function App() {
 return (
  <div className={"app"}>
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
  </div>
 );
}
