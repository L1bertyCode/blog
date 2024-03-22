import { Page } from "@/shared/layouts/Page";
import { memo } from "react";
import s from "./MainPage.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { useTranslation } from "react-i18next";
interface MainPageProps {
 className?: string;
}

const MainPage = memo((props: MainPageProps) => {
 const { className } = props;
 const { t } = useTranslation();
 return (
  <Page className={classNames(s.mainPage, {}, [className])}>
   <div>{t("Main")}</div>
  </Page>
 );
});
export default MainPage;
