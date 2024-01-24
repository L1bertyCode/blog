import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { CommentItem } from "../CommentItem/CommentItem";
import { Text } from "@/shared/ui/Text/Text";

interface CommentListProps {
 className?: string;
 comments?: Comment[];
 isLoading?: boolean;
}

export const CommentList = memo(
 (props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();
  return (
   <div
    className={classNames(s.commentList, {}, [className])}
   >
    {comments?.length ? (
     comments.map((commentDetails) => (
      <CommentItem
       commentDetails={commentDetails as Comment}
       key={commentDetails.id}
       isLoading={isLoading}
      />
     ))
    ) : (
     <Text text={t("No comments")} />
    )}
   </div>
  );
 }
);
