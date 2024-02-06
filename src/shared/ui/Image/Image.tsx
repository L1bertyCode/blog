import { ImgHTMLAttributes, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Image.module.scss";

interface ImageProps
 extends ImgHTMLAttributes<HTMLImageElement> {
 className?: string;
 src?: string;
 alt?: string;
}

export const Image = memo((props: ImageProps) => {
 const { src, alt = "img", className } = props;
 const { t } = useTranslation();
 return (
  <img
   src={src}
   alt={alt}
   className={classNames(s.image, {}, [className])}
  />
 );
});
