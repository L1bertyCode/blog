import { AboutPage } from "@/pages/AboutPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { ArticleListPage } from "@/pages/ArticleListPage";
import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { PortfolioItemPage } from "@/pages/PortfolioItemPage";
import { PortfolioListPage } from "@/pages/PortfolioListPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
 MAIN = "main",
 ABOUT = "about",
 PROFILE = "profile",
 PORTFOLIO_LIST = "portfolio_list",
 PORTFOLIO_ITEM = "portfolio_details",
 ARTICLES = "artciles",
 ARTICLE_DETAILS = "artciles_details",
 //last
 NOTFOUND = "not-found",
}
export type AppRouteProps = RouteProps & {
 authOnly?: boolean;
};
type ExtendsRouteProps = AppRouteProps & {
 icon?: ReactNode;
};
export const RoutePath: Record<AppRoutes, string> = {
 [AppRoutes.MAIN]: "/",
 [AppRoutes.ABOUT]: "/about",
 [AppRoutes.PROFILE]: "/profile/", //:id
 [AppRoutes.PORTFOLIO_LIST]: "/portfolio",
 [AppRoutes.PORTFOLIO_ITEM]: "/portfolio/", //:id
 [AppRoutes.ARTICLES]: "/articles",
 [AppRoutes.ARTICLE_DETAILS]: "/articles/", //:id
 [AppRoutes.NOTFOUND]: "/*",
};
//for Array
interface RoutesItem {
 element: ReactNode;
 path: string;
}
export const routesConfig: Record<
 AppRoutes,
 ExtendsRouteProps
> = {
 [AppRoutes.MAIN]: {
  path: RoutePath.main,
  element: <MainPage />,
 },
 [AppRoutes.ABOUT]: {
  path: RoutePath.about,
  element: <AboutPage />,
 },
 [AppRoutes.PROFILE]: {
  path: RoutePath.profile + ":id",
  element: <ProfilePage />,
  authOnly: true,
 },
 [AppRoutes.PORTFOLIO_LIST]: {
  path: RoutePath.portfolio_list,
  element: <PortfolioListPage />,
  authOnly: true,
 },
 [AppRoutes.PORTFOLIO_ITEM]: {
  path: RoutePath.portfolio_details + ":id",
  element: <PortfolioItemPage />,
  authOnly: true,
 },
 [AppRoutes.ARTICLES]: {
  path: RoutePath.artciles,
  element: <ArticleListPage />,
  authOnly: true,
 },
 [AppRoutes.ARTICLE_DETAILS]: {
  path: RoutePath.artciles_details + ":id",
  element: <ArticleDetailsPage />,
  authOnly: true,
 },
 [AppRoutes.NOTFOUND]: {
  path: RoutePath["not-found"],
  element: <NotFoundPage />,
 },
};
// export const routesConfigArray: RoutesItem[] = [
//   { element: <MainPage />, path: "/" },
//   { element: <AboutPage />, path: "/about" },
//   { element: <ProfilePage />, path: "/profile" },
//   { element: <NotFoundPage />, path: "*" },
// ];
