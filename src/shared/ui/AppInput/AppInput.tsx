import { ChangeEvent, InputHTMLAttributes, memo } from "react";
import s from "./AppInput.module.scss";

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const AppInput = memo(({
  className,
  value,
  onChange,
  type = "text",
  ...otherProps
}: AppInputProps) => {
  return (
    <input
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
      {...otherProps}
      type={type}
      className={s.appInput}
    />
  );
});