import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Text.module.scss";
type TextColorType = "normal" | "inverted" | "error";
type TextAlign = "left" | "center" | "right";
type TextSize = "s" | "m" | "l" | "xl";
interface TextProps {
 className?: string;
 title?: string;
 text?: string;
 colorType?: TextColorType;
 align?: TextAlign;
 size?: TextSize;
}

export const Text = memo((props: TextProps) => {
 const {
  className,
  title,
  text,
  colorType = "normal",
  align = "left",
 } = props;
 const { t } = useTranslation();
 return (
  <div
   className={classNames(s.textWrapper, {}, [
    className,
    s[colorType],
    s[align],
   ])}
  >
   {title && <p className={s.title}>{title}</p>}
   {text && <p className={s.text}>{text}</p>}
  </div>
 );
});
