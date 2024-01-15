import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Avatar.module.scss";
interface AvatarProps {
 className?: string;
 src?: string;
 alt?: string;
 size?: string;
}

export const Avatar = memo((props: AvatarProps) => {
 const {
  className,
  src,
  alt = "image",
  size = "m",
 } = props;

 return (
  <img
   width={size}
   height={size}
   src={src}
   alt={alt}
   className={classNames(s.avatar, {}, [className])}
  />
 );
});
