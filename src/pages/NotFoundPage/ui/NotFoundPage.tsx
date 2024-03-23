import { Page } from "@/shared/layouts/Page";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
 className?: string;
}

const NotFoundPage = memo((props: NotFoundPageProps) => {
 const { className } = props;
 const { t } = useTranslation();
 return (
  <Page className={classNames("", {}, [className])}>
   <div>{t("PageNotFound")}</div>
  </Page>
 );
});
export default NotFoundPage;
