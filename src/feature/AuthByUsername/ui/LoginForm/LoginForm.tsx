import { useTranslation } from "react-i18next";
import s from "./LoginForm.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slices/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
interface LoginFormProps {
  className?: string;
};
export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password } = useSelector(getLoginState);


  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  return (
    <div className={s.loginForm}>
      <AppInput
        className={s.input}
        placeholder={t("Enter username")}
        autoFocus
        onChange={onChangeUsername}
        value={username}
      />
      <AppInput
        className={s.input}
        placeholder={t("Enter password")}
        onChange={onChangePassword}
        value={password}
      />

      <AppButton
        className={s.btn}>{t("Login")}</AppButton>
    </div>
  );
});