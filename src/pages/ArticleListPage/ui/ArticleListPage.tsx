import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleListPage.module.scss";

interface ArticleListPageProps {
  className?: string;
}

const ArticleListPage = memo(
  (props: ArticleListPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
      <div
        className={classNames(s.articleListPage, {}, [
          className,
        ])}
      >
        <div>ArticleListPage</div>
      </div>
    );
  }
);
export default ArticleListPage;
