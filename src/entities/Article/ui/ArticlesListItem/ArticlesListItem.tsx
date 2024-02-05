import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesListItem.module.scss";
import {
 Article,
 ArticleView,
} from "../../model/types/article";

interface ArticlesListItemProps {
 className?: string;
 article?: Article;
 isLoading?: boolean;
 view: ArticleView;
}

export const ArticlesListItem = memo(
 (props: ArticlesListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  if (view === ArticleView.BIG) {
   return (
    <div
     className={classNames(s.articlesListItem, {}, [
      className,
      s[view],
     ])}
    >
     <div>{article?.title}</div>
    </div>
   );
  }
  return (
   <div
    className={classNames(s.articlesListItem, {}, [
     className,
     s[view],
    ])}
   >
    <div>{article?.title}</div>
   </div>
  );
 }
);
