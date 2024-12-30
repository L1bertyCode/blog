import { useTranslation } from "react-i18next";
import s from "./LoginForm.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
import { useDispatch } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slices/loginSlice";
interface LoginFormProps {
  className?: string;
};
export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  return (
    <div className={s.loginForm}>
      <AppInput
        className={s.input}
        placeholder={t("Enter username")}
        autoFocus
        onChange={onChangeUsername}
      />
      <AppInput
        className={s.input}
        placeholder={t("Enter password")}
        onChange={onChangePassword}
      />

      <AppButton
        className={s.btn}>{t("Login")}</AppButton>
    </div>
  );
});