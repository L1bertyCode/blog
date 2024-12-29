import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useState } from "react";
import s from "./AppInput.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
};

export const AppInput = memo(({
  className,
  value,
  onChange,
  type = "text",
  placeholder,
  autoFocus,
  ...otherProps
}: AppInputProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  console.log("autoFocus", autoFocus);

  // useEffect(() => {
  //   autoFocus && setIsFocus(autoFocus);
  // }, [autoFocus]);
  return (
    <div className={classNames(s.appInputWrapper, {}, [])}
    >
      {placeholder && <div className={s.placeholder}>{`${placeholder}>`}</div>}
      <input
        className={s.appInput}
        type={type}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value)}
        autoFocus={isFocus}
        {...otherProps}
      />
    </div>
  );
});