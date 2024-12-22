import { useTranslation } from "react-i18next";
import s from "./NotFoundPage.module.scss";
import { Page } from "@/widgets/Page";
interface NotFoundPageProps { };
const NotFoundPage = ({ }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <Page className={s.notFoundPage}>
      {t("Page Not Found")}
    </Page>
  );
};

export default NotFoundPage;