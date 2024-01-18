import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./CommentList.module.scss";
import { Comment } from "../../model/types/comment";
import { CommentItem } from "../CommentItem/CommentItem";
import { Text } from "@/shared/ui/Text/Text";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

interface CommentListProps {
 className?: string;
 comments?: Comment[];
 isLoading?: boolean;
}

export const CommentList = memo(
 (props: CommentListProps) => {
  const {
   className,
   comments = [
    {
     id: "1",
     text: "some comment",
     user: {
      id: 1,
      username: "admin",
     },
    },
    {
     id: "2",
     text: "some comment 2",
     user: {
      id: 1,
      username: "admin",
     },
    },
    {
     id: "3",
     text: "some comment",
     user: {
      id: 1,
      username: "admin",
     },
    },
   ],
   isLoading,
  } = props;
  const { t } = useTranslation();
  if (isLoading) {
   return <Skeleton />;
  }
  return (
   <div
    className={classNames(s.commentList, {}, [className])}
   >
    {comments?.length ? (
     comments.map((commentDetails) => (
      <CommentItem
       commentDetails={commentDetails as Comment}
       key={commentDetails.id}
      />
     ))
    ) : (
     <Text text={t("No comments")} />
    )}
   </div>
  );
 }
);
