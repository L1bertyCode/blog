import { routeConfig } from "@/shared/config/routeConfig/routeConfig";

import { PageWiithLoader } from "@/widjets/PageWiithLoader/ui/PageWiithLoader";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
 return (
  <Suspense fallback={<PageWiithLoader />}>
   <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
     <Route key={path} path={path} element={element} />
    ))}
   </Routes>
  </Suspense>
 );
};
