import { getUserAuthData } from "@/entities/User";
import { RoutePath } from "@/shared/config/routes/routesConfig";
import { createSelector } from "@reduxjs/toolkit";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
import PortfolioIcon from "@/shared/assets/icons/portfolio-20-20.svg";
import ArticlesIcon from "@/shared/assets/icons/portfolio-20-20.svg";
import { SidebarItemInterace } from "../types/sidebar";
export const getSideBarItems = createSelector(
 getUserAuthData,
 (authData) => {
  const sidebatItemsList: SidebarItemInterace[] = [
   { path: RoutePath.main, Icon: MainIcon, text: "Main" },
   {
    path: RoutePath.about,
    Icon: AboutIcon,
    text: "About",
   },
  ];
  if (authData) {
   sidebatItemsList.push(
    {
     path: RoutePath.profile + authData.id,
     Icon: ProfileIcon,
     text: "Profile",
     authOnly: true,
    },
    {
     path: RoutePath.portfolio_list,
     Icon: PortfolioIcon,
     text: "Porfolio",
     authOnly: true,
    },
    {
     path: RoutePath.artciles,
     Icon: ArticlesIcon,
     text: "Articles",
     authOnly: true,
    }
   );
  }
  return sidebatItemsList;
 }
);
