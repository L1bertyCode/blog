import { memo, useCallback, useEffect } from "react";
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
import {
 articleDetailsCommentsReducer,
 getArticleDetailsComments,
} from "../model/slices/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import {
 getArticleDetailsCommentsError,
 getArticleDetailsCommentsIsLoading,
} from "../model/selectors/comments";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { AddCommentForm } from "@/features/addCommentForm";
import { addCommetnForArticle } from "../model/services/addCommetnForArticle/addCommetnForArticle";

interface ArticleDetailsPageProps {
 className?: string;
}
const reducers: ReducersList = {
 articleDetailsComments: articleDetailsCommentsReducer,
};
export const ArticleDetailsPage = memo(
 (props: ArticleDetailsPageProps) => {
  const dispatch = useAppDispatch();
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(
   getArticleDetailsComments.selectAll
  );
  const commentsIsLoading = useSelector(
   getArticleDetailsCommentsIsLoading
  );
  const commentsError = useSelector(
   getArticleDetailsCommentsError
  );
  const onSendComment = useCallback(
   (text: string) => {
    dispatch(addCommetnForArticle(text));
   },
   [dispatch]
  );
  useInitialEffect(() => {
   dispatch(fetchCommentsByArticleId(id));
  });
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
   <DynamicModuleLoader reducers={reducers}>
    <div
     className={classNames(s.articleDetailsPage, {}, [
      className,
     ])}
    >
     <ArticleDetails id={id} />

     <AddCommentForm onSendComment={onSendComment} />
     <Text
      className={s.commentsTitle}
      title={t("Comments")}
     />

     <CommentList
      isLoading={commentsIsLoading}
      comments={comments}
     />
    </div>
   </DynamicModuleLoader>
  );
 }
);
export default ArticleDetailsPage;
