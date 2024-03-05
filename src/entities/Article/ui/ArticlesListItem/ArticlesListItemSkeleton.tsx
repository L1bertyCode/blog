import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./ArticlesListItem.module.scss";

import { ArticleView } from "../../model/types/article";
import { Card } from "@/shared/ui/Card/Card";

import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface ArticlesListItemSkeletonProps {
 className?: string;
 view: ArticleView;
}

export const ArticlesListItemSkeleton = memo(
 (props: ArticlesListItemSkeletonProps) => {
  const { view, className } = props;

  if (view === ArticleView.BIG) {
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
       <Skeleton
        width="30px"
        height="30px"
        borderRadius="50%"
        className={s.avatar}
       />
       <Skeleton width="150px" height="16px" />
      </div>
      <Skeleton width="80px" height="16px" />
     </div>
     <Skeleton width="250px" height="24px" />
     <Skeleton
      width="100%"
      height="200px"
      className={s.img}
     />

     <div className={s.footer}>
      <Skeleton height="30px" borderRadius="12px" />
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
     <Skeleton
      width="100%"
      height="150px"
      className={s.img}
     />
    </div>
    <div className={s.info}>
     <Skeleton width="100px" height="16px" />
    </div>
    <Skeleton
     width="160px"
     height="16px"
     className={s.title}
    />
   </Card>
  );
 }
);
