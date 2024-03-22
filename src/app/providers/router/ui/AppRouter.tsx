import { routeConfig } from "@/shared/config/routeConfig/routeConfig";
import { Page } from "@/shared/layouts/Page";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

interface AppRouterProps {
 className?: string;
}

export const AppRouter = (props: AppRouterProps) => {
 const { className } = props;
 return (
  <Suspense
   fallback={<Page className={className}>Loading...</Page>}
  >
   <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
     <Route key={path} path={path} element={element} />
    ))}
   </Routes>
  </Suspense>
 );
};
