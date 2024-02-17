import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleTextBlock } from "../../model/types/article";
import { Text } from "@/shared/ui/Text/Text";

import s from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
 className?: string;
 block: ArticleTextBlock;
 colorType?: "primary" | "inverted";
}

export const ArticleTextBlockComponent = memo(
 (props: ArticleTextBlockComponentProps) => {
  const { className, block, colorType = "primary" } = props;
  const { t } = useTranslation();
  return (
   <div
    className={classNames(s.articleTextBlockComponent, {}, [
     className,
    ])}
   >
    {block.title && (
     <Text
      colorType={colorType}
      className={s.title}
      title={block.title}
     />
    )}
    {block.paragraphs &&
     block.paragraphs.map((p) => (
      <Text
       colorType={colorType}
       className={s.paragraph}
       key={p.slice(0, 20)}
       text={p}
      />
     ))}
   </div>
  );
 }
);
