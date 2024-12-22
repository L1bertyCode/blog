import { useTranslation } from "react-i18next";
import s from "./Page.module.scss";
import { ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

interface PageProps {
  children: ReactNode;
  className?: string;
};

export const Page = ({
  children,
  className
}: PageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.page, {}, [className])}>
      {children}
    </div>
  );
};