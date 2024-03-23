import { Page } from "@/shared/layouts/Page";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface ArticlesListPageProps {
 className?: string;
}

const ArticlesListPage = memo(
 (props: ArticlesListPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
   <Page className={classNames("", {}, [className])}>
    <div>{t("Articles")}</div>
   </Page>
  );
 }
);
export default ArticlesListPage;
