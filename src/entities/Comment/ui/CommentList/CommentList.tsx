import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { CommentItem } from "../CommentItem/CommentItem";
import { Text } from "@/shared/ui/Text/Text";

interface CommentListProps {
 className?: string;
 isLoading?: boolean;
 comments?: Comment[];
}

export const CommentList = memo(
 (props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();
  if (isLoading) {
   return (
    <div
     className={classNames(s.commentList, {}, [className])}
    >
     <CommentItem isLoading />
     <CommentItem isLoading />
     <CommentItem isLoading />
    </div>
   );
  }
  if (!comments?.length) {
   return <Text text={t("No comments")} />;
  }
  return (
   <div
    className={classNames(s.commentList, {}, [className])}
   >
    {comments?.map((commentDetails) => (
     <CommentItem
      commentDetails={commentDetails as Comment}
      key={commentDetails.id}
      isLoading={isLoading}
     />
    ))}
   </div>
  );
 }
);
