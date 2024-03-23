import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/shared/layouts/Page";

interface PageWiithLoaderProps {
 className?: string;
}

export const PageWiithLoader = memo(
 (props: PageWiithLoaderProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
   <Page className={classNames("", {}, [className])}>
    <div>{`${t("Loading")}...`}</div>
   </Page>
  );
 }
);
