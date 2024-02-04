import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesListItem.module.scss";
import { Article, ArticleView } from "../../model/types/article";

interface ArticlesListItemProps {
 className?: string;
 article?: Article;
 isLoading?: boolean;
 view?: ArticleView;
}

export const ArticlesListItem = memo(
 (props: ArticlesListItemProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
   <div
    className={classNames(s.articlesListItem, {}, [
     className,
    ])}
   >
    <div>ArticlesListItem</div>
   </div>
  );
 }
);
