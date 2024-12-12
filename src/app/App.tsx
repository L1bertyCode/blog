import { Link, Route, Routes } from "react-router-dom";
import s from "./App.module.scss";


import { Suspense, useState } from "react";
import { ProfilePage } from "@/pages/ProfilePage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { useTheme } from "./context/useTheme/useTheme";
import { Theme } from "./context/ThemeContect/ThemeContect";

interface AppProps { };
export const App = ({ }: AppProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app app_${theme}_theme`}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <button onClick={ toggleTheme}>Theme</button>
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
