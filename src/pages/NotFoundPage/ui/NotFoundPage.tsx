import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";
interface NotFoundPageProps { };
const NotFoundPage = ({ }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className={s.notFoundPage}>
      {t("Page Not Found")}
    </div>
  );
};

export default NotFoundPage;