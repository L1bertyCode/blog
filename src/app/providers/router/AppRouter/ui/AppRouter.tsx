import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routesConfig } from "@/shared/config/routesConfig/routesConfig";

import s from "./AppRouter.module.scss";
import { PageLoader } from "@/widgets/PageLoader";

interface AppRouterProps { };
export const AppRouter = ({ }: AppRouterProps) => {
  return (
    <div className={s.appRouter}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routesConfig).map(r => (
            <Route
              key={r.path}
              path={r.path} element={r.element}
            />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};