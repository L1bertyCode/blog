import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

// import s from "./LangaugeSwitcher.module.scss";
import { Button } from "@/shared/ui/Button/Button";

interface LangaugeSwitcherProps {
 className?: string;
}

export const LangaugeSwitcher = memo(
 (props: LangaugeSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();
  return (
   <Button
    className={classNames(
     "",
     // s.langaugeSwitcher
     {},
     [className]
    )}
    variant="outlined"
    colorType="background"
    onClick={() => {
     i18n.changeLanguage(
      i18n.language === "en" ? "ru" : "en"
     );
    }}
   >
    {t("Lang")}
   </Button>
  );
 }
);
