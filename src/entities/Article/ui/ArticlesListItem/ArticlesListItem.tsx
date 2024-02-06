import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesListItem.module.scss";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import {
 Article,
 ArticleView,
} from "../../model/types/article";
import { Card } from "@/shared/ui/Card/Card";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Image } from "@/shared/ui/Image/Image";

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
    <Card
     padding="24"
     className={classNames(s.articlesListItem, {}, [
      className,
      s[view],
     ])}
    >
     <div>{article?.title}</div>
     <div>{article?.subtitle}</div>
    </Card>
   );
  }
  return (
   <Card
    className={classNames(s.articlesListItem, {}, [
     className,
     s[view],
    ])}
   >
    <Image src={article?.img} alt={article?.title} />
    <div>{article?.title}</div>
    <div className={s.view}>
     <Icon Svg={EyeIcon} />
     {article?.views}
    </div>
   </Card>
  );
 }
);
