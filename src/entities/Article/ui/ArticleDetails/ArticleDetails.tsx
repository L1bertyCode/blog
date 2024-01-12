import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleDetails.module.scss";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { artcileDetailsReducer } from "../../model/slice/artcileSlice";

interface ArticleDetailsProps {
  className?: string;
}
const reducers: ReducersList = {
  articleDetails: artcileDetailsReducer,
};
export const ArticleDetails = memo(
  (props: ArticleDetailsProps) => {
    const { className } = props;
    const { t } = useTranslation();
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
          <div>ArticleDetails</div>
        </div>
      </DynamicModuleLoader>
    );
  }
);
