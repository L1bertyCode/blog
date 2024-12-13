import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export enum ApRoutes {
  MAIN = "main",
  PROFILE = "profile",
  NOT_FOUND = "not-found"
}
export const RoutePath: Record<ApRoutes, string> = {
  [ApRoutes.MAIN]: "/",
  [ApRoutes.PROFILE]: "/profile",
  [ApRoutes.NOT_FOUND]: "*"
};

export const routesConfig: Record<ApRoutes, RouteProps> = {
  [ApRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [ApRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />
  },
  [ApRoutes.NOT_FOUND]: {
    path: RoutePath["not-found"],
    element: <NotFoundPage />
  },
};