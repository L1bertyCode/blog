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
import {
 articleListPageReducer,
 getArticlesList,
} from "../model/slices/articleListPageSlice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { fetchArticleList } from "../model/services/fetchArticleList/fetchArticleList";
import { useSelector } from "react-redux";
import {
 getArticleListPageError,
 getArticleListPageIsLoading,
 getArticleListPageView,
} from "../model/selectors/articleListPageSelectors";

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
  const [localView, setLoacalView] = useState<ArticleView>(
   ArticleView.SMALL
  );
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticlesList.selectAll);
  const isLoading = useSelector(
   getArticleListPageIsLoading
  );
  const error = useSelector(getArticleListPageError);
  const view = useSelector(getArticleListPageView);
  useInitialEffect(() => {
   dispatch(fetchArticleList());
  });
  const onViewClick = (view: ArticleView) =>
   setLoacalView(view);
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
     <ArticlesList
      isLoading={isLoading}
      view={view}
      articles={articles}
     />
    </div>
   </DynamicModuleLoader>
  );
 }
);
export default ArticleListPage;
