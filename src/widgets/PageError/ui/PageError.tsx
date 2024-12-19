import { useTranslation } from "react-i18next";
import s from "./PageError.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
interface PageErrorProps {
  className?: string;
};
export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={s.pageError}>
      <p>{t("An unexpected error occurred")}</p>
      <AppButton onClick={reloadPage}>{t("Reload page")}</AppButton>
    </div>
  );
};