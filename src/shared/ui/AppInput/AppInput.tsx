import { ChangeEvent, InputHTMLAttributes, memo } from "react";
import s from "./AppInput.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

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
  placeholder,
  ...otherProps
}: AppInputProps) => {
  return (
    <div className={classNames(s.appInputWrapper, {}, [])}
    >
      {placeholder && <div className={s.placeholder}>{`${placeholder}>`}</div>}
      <input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
        {...otherProps}
        type={type}
        className={s.appInput}
      />
    </div>
  );
});