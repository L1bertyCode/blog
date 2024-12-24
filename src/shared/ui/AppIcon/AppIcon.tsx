import { useTranslation } from "react-i18next";
import s from "./AppIcon.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { FC, SVGAttributes } from "react";
interface AppIconProps {
  Svg: FC<SVGAttributes<SVGElement>>;
  width?: string;
  size?: string;
  height?: string;
  viewBox?: string;
  className?: string;
};
export const AppIcon = ({
  Svg,
  size = "40",
  width = size || "40",
  height = size || "41",
  viewBox = `0 0 ${width} ${height}`,
  className
}: AppIconProps) => {
  const { t } = useTranslation();
  return (
    <Svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={classNames(s.appIcon, {}, [className])}
    />
  );
};