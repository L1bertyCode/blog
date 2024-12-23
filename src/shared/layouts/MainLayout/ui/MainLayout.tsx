import { ReactNode } from "react";
import s from "./MainLayout.module.scss";
interface MainLayoutProps {
  header: ReactNode;
  main: ReactNode;
  sidebar: ReactNode;
  className?: string;
};
export const MainLayout = ({
  header,
  main,
  sidebar,
  className }: MainLayoutProps) => {
  return (
    <div className={s.mainLayout}>
      <>{header}</>
      <div className={s.content}>
        <>{sidebar}</>
        <>{main}</>
      </div>
    </div>
  );
};