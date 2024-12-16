import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
};
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  return (
    <AppButton onClick={() => {
      i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    }}>{t("Language")}</AppButton>
  );
};