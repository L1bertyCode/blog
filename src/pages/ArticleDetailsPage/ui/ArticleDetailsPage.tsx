import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleDetailsPage.module.scss";
import { ArticleDetails } from "@/entities/Article";
import { useParams } from "react-router-dom";
import { Text } from "@/shared/ui/Text/Text";
import { CommentList } from "@/entities/Comment";
import {
 DynamicModuleLoader,
 ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsCommentsReducer } from "../model/slices/articleDetailsCommentsSlice";

interface ArticleDetailsPageProps {
 className?: string;
}
const reducers: ReducersList = {
 articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticleDetailsPage = memo(
 (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
   <div
    className={classNames(s.articleDetailsPage, {}, [
     className,
    ])}
   >
    {t("Article not found")}
   </div>;
  }
  return (
   <DynamicModuleLoader
    reducers={reducers}
    removeAfterUnmount
   >
    <div
     className={classNames(s.articleDetailsPage, {}, [
      className,
     ])}
    >
     <ArticleDetails id={id} />
     <Text
      className={s.commentsTitle}
      title={t("Comments")}
     />
     <CommentList isLoading={false} comments={[]} />
    </div>
   </DynamicModuleLoader>
  );
 }
);
export default ArticleDetailsPage;
