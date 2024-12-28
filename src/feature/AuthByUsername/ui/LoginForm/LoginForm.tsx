import { useTranslation } from "react-i18next";
import s from "./LoginForm.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
interface LoginFormProps {
  className?: string;
};
export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.loginForm}>
      <input
        className={s.input} type="text" />
      <input
        className={s.input} type="text" />
      <AppButton
        className={s.btn}>{t("Login")}</AppButton>
    </div>
  );
};