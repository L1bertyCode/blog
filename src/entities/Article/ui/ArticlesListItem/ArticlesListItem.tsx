import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesListItem.module.scss";
import EyeIcon from "@/shared/assets/icons/eye.svg";
import {
 Article,
 ArticleBlockType,
 ArticleTextBlock,
 ArticleView,
} from "../../model/types/article";
import { Card } from "@/shared/ui/Card/Card";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Image } from "@/shared/ui/Image/Image";
import { Text } from "@/shared/ui/Text/Text";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Button } from "@/shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@/shared/config/routes/routesConfig";

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
  console.log("article?.user", article?.user);
  
  const navigate = useNavigate();
  const onOpenArticle = useCallback(() => {
   navigate(RoutePath.artciles_details + article?.id);
  }, [article?.id, navigate]);
  const types = (
   <Text
    colorType="inverted"
    className={s.types}
    text={article?.type.join(", ")}
   />
  );
  const views = (
   <Text
    colorType="inverted"
    text={String(article?.views)}
   />
  );

  if (view === ArticleView.BIG) {
   let textBlock = article?.blocks.find(
    (block) => block.type === ArticleBlockType.TEXT
   ) as ArticleTextBlock;
   return (
    <Card
     padding="24"
     className={classNames(s.articlesListItem, {}, [
      className,
      s[view],
     ])}
    >
     <div className={s.header}>
      <div className={s.user}>
       <Avatar
        className={s.avatar}
        src={article?.user?.avatar}
       />
       <Text
        colorType="inverted"
        text={article?.user?.username || "username"}
       />
      </div>
      <Text
       colorType="inverted"
       text={article?.createdAt}
      />
     </div>

     <Text colorType="inverted" text={article?.title} />
     {types}
     <Image
      className={s.img}
      src={article?.img}
      alt={article?.title}
     />
     {textBlock && (
      <ArticleTextBlockComponent
       colorType="inverted"
       className={s.textBlock}
       block={textBlock}
      />
     )}
     <div className={s.footer}>
      <Button
       onClick={onOpenArticle}
       variant="outlined-inverted"
      >
       {t("Read more")}
      </Button>
      <div className={s.views}>
       <Icon Svg={EyeIcon} />
       {views}
      </div>
     </div>
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
     <Button
      className={s.btn}
      onClick={onOpenArticle}
      variant="outlined-accent"
     >
      {t("Read more")}
     </Button>
     <Text
      colorType="error"
      className={s.createdAt}
      text={article?.createdAt}
     />
    </div>
    <div className={s.info}>
     {types}
     <div className={s.views}>
      <Icon Svg={EyeIcon} />
      {views}
     </div>
    </div>
    <Text
     colorType="inverted"
     className={s.title}
     text={article?.title}
    />
   </Card>
  );
 }
);
