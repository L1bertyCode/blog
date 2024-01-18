import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Avatar.module.scss";
import { Icon } from "../Icon/Icon";
import UserIcon from "@/shared/assets/icons/user-filled.svg";
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
 if (!src) {
  return (
   <Icon
    Svg={UserIcon}
    className={classNames(s.empty, {}, [className])}
   />
  );
 }
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
