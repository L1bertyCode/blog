import {
 ChangeEvent,
 MutableRefObject,
 TextareaHTMLAttributes,
 memo,
 useEffect,
 useRef,
} from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Textarea.module.scss";
type TextareaColorType = "primary" | "inverted";
type HTMLTextareaProps = Omit<
 TextareaHTMLAttributes<HTMLTextAreaElement>,
 "value" | "onChange" | "readOnly" | "type"
>;
interface TextareaProps extends HTMLTextareaProps {
 className?: string;
 placeholder?: string;
 label?: string;
 id?: string;
 value?: string | number;
 onChange?: (value: string) => void;
 autoFocus?: boolean;
 readOnly?: boolean;
 colorType?: TextareaColorType;
}

export const Textarea = memo((props: TextareaProps) => {
 const {
  className,
  placeholder = "",
  label,
  id,
  value,
  onChange,
  autoFocus = false,
  readOnly,
  colorType = "primary",
  ...otherProps
 } = props;
 const onChangeHandler = (
  e: ChangeEvent<HTMLTextAreaElement>
 ) => {
  onChange?.(e.target.value);
 };
 
 const ref =
  useRef() as MutableRefObject<HTMLTextAreaElement>;
 useEffect(() => {
  if (autoFocus && ref?.current) {
   ref?.current?.focus();
  }
 }, []);

 return (
  <textarea
   {...otherProps}
   ref={ref}
   value={value}
   onChange={onChangeHandler}
   placeholder={placeholder}
   id={id}
   autoFocus={autoFocus}
   readOnly={readOnly}
   className={classNames(
    s.textarea,
    { [s.readOnly]: readOnly },
    [s[colorType], className]
   )}
  />
 );
});
