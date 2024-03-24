import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/shared/layouts/Page";
import s from "./PageLoader.module.scss";
import { Loader } from "@/shared/ui/Loader/Loader";
interface PageLoaderProps {
 className?: string;
}

export const PageLoader = memo((props: PageLoaderProps) => {
 const { className } = props;
 const { t } = useTranslation();
 return (
  <Page
   className={classNames(s.pageLoader, {}, [className])}
  >
   <Loader />
  </Page>
 );
});
