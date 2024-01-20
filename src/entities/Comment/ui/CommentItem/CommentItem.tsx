import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./CommentItem.module.scss";
import { Comment } from "../../model/types/comment";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Text } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface CommentItemProps {
 className?: string;
 isLoading?: boolean;
 commentDetails: Comment;
}

export const CommentItem = memo(
 (props: CommentItemProps) => {
  const { className, commentDetails, isLoading } = props;
  const { t } = useTranslation();
  if (isLoading) {
   return (
    <div
     className={classNames(s.commentItem, {}, [className])}
    >
     <div className={s.userInfo}>
      <Skeleton
       className={s.avatar}
       width="30px"
       height="30px"
       borderRadius="50%"
      />
      <Skeleton height="16px" width="100px" />
     </div>
     <Skeleton width="100%" height="50px" />
    </div>
   );
  }
  return (
   <div
    className={classNames(s.commentItem, {}, [className])}
   >
    <div className={s.userInfo}>
     <Avatar className={s.avatar} />
     <Text text={commentDetails?.user.username} />
    </div>
    <Text text={commentDetails?.text} />
   </div>
  );
 }
);
