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
import { Text } from "@/shared/ui/Text/Text";

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
    <div className={s.imageWrapper}>
     <Image
      className={s.img}
      src={article?.img}
      alt={article?.title}
     />

     <Text
      colorType="error"
      className={s.createdAt}
      text={article?.createdAt}
     />
    </div>
    <div className={s.info}>
     <Text
      className={s.types}
      text={article?.type.join(", ")}
     />
     <div className={s.views}>
      <Icon Svg={EyeIcon} />
      <Text text={String(article?.views)} />
     </div>
    </div>
    <Text className={s.title} text={article?.title} />
   </Card>
  );
 }
);
