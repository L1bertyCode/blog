import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Text.module.scss";
type TextSize = "s" | "m" | "l" | "xl";

interface TextProps {
 className?: string;
 title?: string;
 text?: string;
 size?: TextSize;
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
 const { size = "m", title, text, className } = props;
 //  const HeaderTag = size ? mapSizeToHeader[size] : "h5";

 //  console.log(typeof HeaderTag);
 //  console.log(HeaderTag);

 return (
  <>
   {title ? (
    <p className={classNames(s.title, {}, [className])}>
     {title}
    </p>
   ) : null}
   {text ? (
    <p
     className={classNames(s.text, {}, [className, size])}
    >
     {text}
    </p>
   ) : null}
  </>
 );
};
