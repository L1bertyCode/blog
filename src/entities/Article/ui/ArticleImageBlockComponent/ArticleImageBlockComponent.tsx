import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleImageBlock } from "../../model/types/article";

import s from "./ArticleImageBlockComponent.module.scss";
import { Text } from "@/shared/ui/Text/Text";

interface ArticleImageBlockComponentProps {
 className?: string;
 block?: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
 (props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();
  return (
   <div
    className={classNames(
     s.articleImageBlockComponent,
     {},
     [className]
    )}
   >
    <img
     className={s.img}
     src={block?.src}
     alt={block?.title || "image"}
    />
    {block?.title && (
     <Text align="center" text={block?.title} />
    )}
   </div>
  );
 }
);
