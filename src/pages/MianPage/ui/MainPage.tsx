import { Page } from "@/shared/layouts/Page";
import { memo, useEffect, useState } from "react";
import s from "./MainPage.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";
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
   <Text title={t("Main")} />
   {/* eslint-disable
   i18next/no-literal-string */}
   <Button
    variant="outlined"
    onClick={() => setError(true)}
   >
    throw error
   </Button>
  </Page>
 );
});
export default MainPage;
