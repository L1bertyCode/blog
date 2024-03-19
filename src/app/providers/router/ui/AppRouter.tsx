import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { ReactNode, Suspense, memo } from "react";
import { Route, Routes } from "react-router-dom";

interface AppRouterProps {}

export const AppRouter = (props: AppRouterProps) => {
 const {} = props;
 return (
  <Suspense fallback={<div>Loading...</div>}>
   <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
     <Route key={path} path={path} element={element} />
    ))}
   </Routes>
  </Suspense>
 );
};
