import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Text.module.scss";
type TextSize = "s" | "m" | "l" | "xl";
type TextColorType =
 | "primary"
 | "secondary"
 | "primaryInverted"
 | "background"
 | "backgroundInverted";

interface TextProps {
 className?: string;
 title?: string;
 text?: string;
 size?: TextSize;
 colorType?: TextColorType;
}
// const mapSizeToHeader: Record<string, string> = {
//  s: "h6",
//  m: "h5",
//  l: "h4",
//  xl: "h3",
//  xxl: "h2",
//  xxxl: "h1",
// };

export const Text = (props: TextProps) => {
 const {
  size = "m",
  title,
  text,
  colorType = "primary",
  className,
  ...otherProps
 } = props;
//  const HeaderTag = size ? mapSizeToHeader[size] : "h5";

//  console.log(HeaderTag);

 return (
  <>
   {title ? (
    <p
     {...otherProps}
     className={classNames(s.title, {}, [
      className,
      s[colorType],
     ])}
    >
     {title}
    </p>
   ) : null}
   {text ? (
    <p
     {...otherProps}
     className={classNames(s.text, {}, [
      className,
      s[size],
      s[colorType],
     ])}
    >
     {text}
    </p>
   ) : null}
  </>
 );
};
