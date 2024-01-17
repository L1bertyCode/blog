import { ReactNode, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import CopyIcon from "@/shared/assets/icons/copy-20-20.svg";

import s from "./Code.module.scss";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

interface CodeProps {
 className?: string;
 text: string;
}

export const Code = memo((props: CodeProps) => {
 const { className, text } = props;
 const { t } = useTranslation();
 const onCopy = useCallback(() => {
  navigator.clipboard.writeText(text);
 }, [text]);
 return (
  <pre className={classNames(s.code, {}, [className])}>
   <Button onClick={onCopy} className={s.btn}>
    <Icon Svg={CopyIcon} />
   </Button>
   <code>{text}</code>
  </pre>
 );
});
