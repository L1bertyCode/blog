import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Text.module.scss";

interface TextProps {
 className?: string;
 title?: string;
 text?: string;
}

export const Text = memo((props: TextProps) => {
 const { title, text, className } = props;
 const { t } = useTranslation();
 return (
  <>
   {title ? (
    <p className={classNames(s.title, {}, [className])}>
     {title}
    </p>
   ) : null}
   {text ? (
    <p className={classNames(s.text, {}, [className])}>
     {text}
    </p>
   ) : null}
  </>
 );
});
