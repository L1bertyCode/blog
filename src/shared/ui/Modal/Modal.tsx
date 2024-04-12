import {
 MouseEvent,
 ReactNode,
 useEffect,
 useRef,
 useState,
} from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Modal.module.scss";
import { Button } from "../Button/Button";

interface ModalProps {
 children: ReactNode;
 className?: string;
 isOpen: boolean;
 onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
 const { children, isOpen, onClose, className } = props;
 const [isClosing, setIsClosing] = useState<boolean>(false);
 const timerRef = useRef<ReturnType<typeof setTimeout>>();
 const onCloseHandler = () => {
  if (onClose) {
   setIsClosing(true);
   timerRef.current = setTimeout(() => {
    onClose();
    setIsClosing(false);
   }, 300);
  }
 };
 useEffect(() => {
  return () => {
   clearTimeout(timerRef.current);
  };
 }, []);
 return (
  <div
   onClick={onCloseHandler}
   className={classNames(
    s.modal,
    { [s.isOpen]: isOpen, [s.isClosing]: isClosing },
    [className]
   )}
  >
   <div
    onClick={(e: MouseEvent) => e.stopPropagation()}
    className={s.content}
   >
    <Button onClick={onCloseHandler} className={s.closeBtn}>
     {"+"}
    </Button>
    {children}
   </div>
  </div>
 );
};
