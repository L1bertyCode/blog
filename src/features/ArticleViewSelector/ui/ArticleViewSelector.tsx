import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import ListIcon from "@/shared/assets/icons/burger.svg";
import TiledIcon from "@/shared/assets/icons/tile.svg";

import { Card } from "@/shared/ui/Card/Card";
import { Button } from "@/shared/ui/Button/Button";
import { ArticleView } from "@/entities/Article";
import { Icon } from "@/shared/ui/Icon/Icon";
import s from "./ArticleViewSelector.module.scss";
interface ArticleViewSelectorProps {
 className?: string;
 view: ArticleView;
 onViewClick?: (view: ArticleView) => void;
}

export const ArticleViewSelector = memo(
 (props: ArticleViewSelectorProps) => {
  const { view, onViewClick, className } = props;
  const { t } = useTranslation();
  return (
   <Card
    padding="8"
    width={"fit-content"}
    className={classNames(s.articleViewSelector, {}, [
     className,
    ])}
   >
    <Button
     onClick={() => {
      if (view === ArticleView.SMALL) {
       onViewClick?.(ArticleView.BIG);
      } else {
       onViewClick?.(ArticleView.SMALL);
      }
     }}
    >
     {view === ArticleView.SMALL ? (
      <Icon Svg={ListIcon} />
     ) : (
      <Icon Svg={TiledIcon} />
     )}
    </Button>
   </Card>
  );
 }
);
