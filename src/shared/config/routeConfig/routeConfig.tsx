import { ArticlesListPage } from "@/pages/ArticlesListPage";
import { MainPage } from "@/pages/MianPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
 MAIN = "main",
 ARTICLES = "articles",
 NOT_FOUND = "not_found",
}
export const RoutePath: Record<AppRoutes, string> = {
 [AppRoutes.MAIN]: "/",
 [AppRoutes.ARTICLES]: "/articles",
 [AppRoutes.NOT_FOUND]: "*",
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
 [AppRoutes.MAIN]: {
  path: RoutePath.main,
  element: <MainPage />,
 },
 [AppRoutes.ARTICLES]: {
  path: RoutePath.articles,
  element: <ArticlesListPage />,
 },
 [AppRoutes.NOT_FOUND]: {
  path: RoutePath.not_found,
  element: <NotFoundPage/>,
 },
};
