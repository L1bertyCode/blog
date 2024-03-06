import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleListPage.module.scss";
import {
 ArticleView,
 ArticlesList,
} from "@/entities/Article";

import { ArticleViewSelector } from "@/features/ArticleViewSelector";
import {
 DynamicModuleLoader,
 ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleListPageReducer } from "../model/slices/articleListPageSlice";

interface ArticleListPageProps {
 className?: string;
}
const reducers: ReducersList = {
 articleListPage: articleListPageReducer,
};
const ArticleListPage = memo(
 (props: ArticleListPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const [view, setView] = useState<ArticleView>(
   ArticleView.SMALL
  );
  const onViewClick = (view: ArticleView) => setView(view);
  return (
   <DynamicModuleLoader reducers={reducers}>
    <div
     className={classNames(s.articleListPage, {}, [
      className,
     ])}
    >
     <ArticleViewSelector
      view={view}
      onViewClick={onViewClick}
     />
     <ArticlesList view={view} articles={[]} />
    </div>
   </DynamicModuleLoader>
  );
 }
);
export default ArticleListPage;
