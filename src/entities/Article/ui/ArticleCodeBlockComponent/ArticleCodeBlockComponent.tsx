import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleCodeBlock } from "../../model/types/article";

import s from "./ArticleCodeBlockComponent.module.scss";
import { Code } from "@/shared/ui/Code/Code";

interface ArticleCodeBlockComponentProps {
 className?: string;
 block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
 (props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();
  return (
   <div
    className={classNames(s.articleCodeBlockComponent, {}, [
     className,
    ])}
   >
    <Code text={block.code} />
   </div>
  );
 }
);
