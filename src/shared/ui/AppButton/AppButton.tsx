import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

type ButtonColorType = "background" | "backgroundInverted";

type ButtonVariant =
  "clear" |
  "outlined" |
  "filled";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  colorType?: ButtonColorType;
};

export const AppButton = ({
  children,
  variant = "clear",
  colorType = "background",
  className,
  ...otherProps
}: AppButtonProps) => {
  return (
    <button
      className={
        classNames(
          s.appButton,
          {},
          [
            s[variant],
            s[colorType],
            className
          ]
        )
      }
      {...otherProps}
    >
      {children}
    </button>
  );
};