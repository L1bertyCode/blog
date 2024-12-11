import { Link, Route, Routes } from "react-router-dom";
import s from "./App.module.scss";


import { Suspense } from "react";
import { ProfilePage } from "@/pages/ProfilePage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

import "./style/index.scss";

interface AppProps { };
export const App = ({ }: AppProps) => {
  return (
    <div className={`app`}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Suspense fallback={<div>Loding...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
