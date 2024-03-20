import { ReactNode, memo } from "react";

import { classNames } from "@/shared/lib/classNames";

import s from "./MainLayout.module.scss";

interface MainLayoutProps {
 className?: string;
 header?: ReactNode;
 sidebar?: ReactNode;
 main?: ReactNode;
 bar?: ReactNode;
}

export const MainLayout = memo((props: MainLayoutProps) => {
 const { header, sidebar, main, bar, className } = props;
 return (
  <div
   className={classNames(s.mainLayout, {}, [className])}
  >
   <header>{header}</header>
   <div className={s.content}>
    <>{sidebar}</>
    <main>{main}</main>
   </div>
  </div>
 );
});
