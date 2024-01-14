import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleDetails.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { artcileDetailsReducer } from "../../model/slice/artcileSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticleDetailsIsLoading } from "../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading";
import { getArticleDetailsData } from "../../model/selectors/getArticleDetailsData/getArticleDetailsData";
import { getArticleDetailsError } from "../../model/selectors/getArticleDetailsError/getArticleDetailsError";
import { Text } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}
const reducers: ReducersList = {
  articleDetails: artcileDetailsReducer,
};
export const ArticleDetails = memo(
  (props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const isLoading = useSelector(
      getArticleDetailsIsLoading
    );
    const data = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    let content;
    if (isLoading) {
      content = (
        <div>
          <Skeleton
            className={s.avatar}
            width="200px"
            height="200px"
            borderRadius="50%"
          />
          <Skeleton
            className={s.title}
            width="300px"
            height="24px"
          />
          <Skeleton
            className={s.skeleton}
            width="600px"
            height="24px"
          />
          <Skeleton
            className={s.skeleton}
            width="90%"
            height="200px"
          />
          <Skeleton
            className={s.skeleton}
            width="90%"
            height="200px"
            colorType="primary"
          />
        </div>
      );
    } else if (error) {
      content = (
        <Text
          text={t("There was an error loading the article")}
          colorType="error"
          align="center"
        />
      );
    } else {
      content = <div>ArticleDetails id={id}</div>;
    }
    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <div
          className={classNames(s.articleDetails, {}, [
            className,
          ])}
        >
          {content}
        </div>
      </DynamicModuleLoader>
    );
  }
);
