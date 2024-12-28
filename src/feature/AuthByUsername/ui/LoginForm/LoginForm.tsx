import { useTranslation } from "react-i18next";
import s from "./LoginForm.module.scss";
interface LoginFormProps {
className?: string;
};
export const LoginForm = ({  className }: LoginFormProps) => {
const { t } = useTranslation();
  return (
    <div className={s.loginForm}>
      <div>LoginForm</div>
    </div>
  );
};