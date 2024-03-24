import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./PageError.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { Page } from "@/shared/layouts/Page";

interface PageErrorProps {
 className?: string;
}

export const PageError = memo((props: PageErrorProps) => {
 const { className } = props;
 const { t } = useTranslation();
 return (
  <div className={classNames(s.pageError, {}, [className])}>
   <div>{t("An unexpected error occurred")}</div>
   <Button
    variant="outlined"
    onClick={() => {
     location.reload();
    }}
   >
    {t("Reload page")}
   </Button>
  </div>
 );
});
