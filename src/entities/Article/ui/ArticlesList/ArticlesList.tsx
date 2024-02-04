import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesList.module.scss";
import {
 Article,
 ArticleView,
} from "../../model/types/article";

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
  return (
   <div
    className={classNames(s.articlesList, {}, [className])}
   >
    <div>ArticlesList</div>
   </div>
  );
 }
);
