import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
};
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const lang = async () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };
  return (
    <AppButton onClick={lang}>{t("Language")}</AppButton>
  );
};