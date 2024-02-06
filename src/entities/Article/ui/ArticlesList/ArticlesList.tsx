import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesList.module.scss";
import {
 Article,
 ArticleView,
} from "../../model/types/article";
import { ArticlesListItem } from "../ArticlesListItem/ArticlesListItem";

interface ArticlesListProps {
 className?: string;
 articles?: Article[];
 isLoading?: boolean;
 view?: ArticleView;
}

export const ArticlesList = memo(
 (props: ArticlesListProps) => {
  const {
   className,
   articles,
   isLoading,
   view = ArticleView.SMALL,
  } = props;
  const { t } = useTranslation();
  const renderArticle = (article: Article, key: string) => (
   <ArticlesListItem
    key={key}
    article={article}
    view={view}
   />
  );
  return (
   <div
    className={classNames(s.articlesList, {}, [className])}
   >
    {articles?.map((articleItem: Article, i) =>
     renderArticle(articleItem, articleItem?.title + i)
    )}
   </div>
  );
 }
);
