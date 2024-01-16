import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleTextBlock } from "../../model/types/article";
import { Text } from "@/shared/ui/Text/Text";

import s from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
 className?: string;
 block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
 (props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();
  return (
   <div
   className={classNames(
     s.articleTextBlockComponent,
     {},
     [className]
   )}
   >
    {block.title && (
     <Text className={s.title} title={block.title} />
    )}
    {block.paragraphs &&
     block.paragraphs.map((p) => (
      <Text className={s.paragraph} key={p.slice(0, 20)} text={p} />
     ))}
   </div>
  );
 }
);
