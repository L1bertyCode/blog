import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticleDetails.module.scss";
import {
 DynamicModuleLoader,
 ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { artcileDetailsReducer } from "../../model/slice/artcileSlice";
import { useSelector } from "react-redux";
import { getArticleDetailsIsLoading } from "../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading";
import { getArticleDetailsData } from "../../model/selectors/getArticleDetailsData/getArticleDetailsData";
import { getArticleDetailsError } from "../../model/selectors/getArticleDetailsError/getArticleDetailsError";
import { Text } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import EyeIcon from "@/shared/assets/icons/eye-20-20.svg";
import CalendarIcon from "@/shared/assets/icons/calendar-20-20.svg";
import { Icon } from "@/shared/ui/Icon/Icon";
import {
 ArticleBlock,
 ArticleBlockType,
} from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
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
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const data = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
   switch (block.type) {
    case ArticleBlockType.CODE:
     return (
      <ArticleCodeBlockComponent
       block={block}
       key={block.id}
       className={s.block}
      />
     );
    case ArticleBlockType.IMAGE:
     return (
      <ArticleImageBlockComponent
       block={block}
       key={block.id}
       className={s.block}
      />
     );
    case ArticleBlockType.TEXT:
     return (
      <ArticleTextBlockComponent
       block={block}
       key={block.id}
       className={s.block}
      />
     );
    default:
     return null;
   }
  }, []);

  let content;
  if (isLoading) {
   content = (
    <>
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
    </>
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
   content = (
    <>
     <Avatar
      size="200px"
      src={data?.img}
      className={s.avatar}
     />
     <Text title={data?.title} />
     <Text text={data?.subtitle} />
     <div className={s.item}>
      <Icon Svg={EyeIcon} className={s.icon} />
      <Text text={String(data?.views)} />
     </div>
     <div className={s.item}>
      <Icon Svg={CalendarIcon} className={s.icon} />
      <Text text={data?.createdAt} />
     </div>
     {data?.blocks.map(renderBlock)}
     {data?.blocks.map(renderBlock)}
    </>
   );
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
