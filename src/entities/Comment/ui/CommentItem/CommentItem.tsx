import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./CommentItem.module.scss";
import { Comment } from "../../model/types/comment";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Text } from "@/shared/ui/Text/Text";

interface CommentItemProps {
 className?: string;
 commentDetails: Comment;
}

export const CommentItem = memo(
 (props: CommentItemProps) => {
  const { className, commentDetails } = props;
  const { t } = useTranslation();
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
