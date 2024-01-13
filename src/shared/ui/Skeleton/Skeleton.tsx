import { CSSProperties, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Skeleton.module.scss";

type ColorType = "primary" | "inverted";
interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  colorType?: ColorType;
}
export const Skeleton = memo((props: SkeletonProps) => {
  const {
    className,
    width = "100px",
    height = "100px",
    borderRadius,
    colorType = "inverted",
  } = props;
  const { t } = useTranslation();
  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };
  return (
    <div
      className={classNames(s.skeleton, {}, [
        className,
        s[colorType],
      ])}
      style={styles}
    ></div>
  );
});
