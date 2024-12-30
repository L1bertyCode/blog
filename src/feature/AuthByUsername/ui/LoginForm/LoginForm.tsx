import { useTranslation } from "react-i18next";
import s from "./LoginForm.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
interface LoginFormProps {
  className?: string;
};
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.loginForm}>
      <AppInput
        className={s.input}
        placeholder={t("Enter username")}
        autoFocus
      />
      <AppInput
        className={s.input}
        placeholder={t("Enter password")}
      />

      <AppButton
        className={s.btn}>{t("Login")}</AppButton>
    </div>
  );
};