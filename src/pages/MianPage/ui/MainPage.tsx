import { Page } from "@/shared/layouts/Page";
import { memo, useEffect, useState } from "react";
import s from "./MainPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";
interface MainPageProps {
 className?: string;
}

const MainPage = memo((props: MainPageProps) => {
 const { className } = props;
 const { t } = useTranslation();
 const [error, setError] = useState<boolean>(false);
 useEffect(() => {
  if (error) {
   throw new Error();
  }
 }, [error]);
 return (
  <Page className={classNames(s.mainPage, {}, [className])}>
   <div>{t("Main")}</div>
   {/* eslint-disable
   i18next/no-literal-string */}
   <Button
    variant="outlined-inverted"
    onClick={() => setError(true)}
   >
    throw error
   </Button>
   <Button>Btnm</Button>
  </Page>
 );
});
export default MainPage;
