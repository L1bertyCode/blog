import { Page } from "@/shared/layouts/Page";
import { classNames } from "@/shared/lib/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";
interface NotFoundPageProps {
 className?: string;
}

const NotFoundPage = memo((props: NotFoundPageProps) => {
 const { className } = props;
 const { t } = useTranslation();
 return (
  <Page
   className={classNames(s.notFoundPage, {}, [className])}
  >
   <div>{t("Page Not Found")}</div>
  </Page>
 );
});
export default NotFoundPage;
