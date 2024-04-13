import {
 MouseEvent,
 ReactNode,
 useCallback,
 useEffect,
 useRef,
 useState,
} from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Modal.module.scss";
import { Button } from "../Button/Button";
import { Portal } from "../Portal/Portal";

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
 const onCloseHandler = useCallback(() => {
  if (onClose) {
   setIsClosing(true);
   timerRef.current = setTimeout(() => {
    onClose();
    setIsClosing(false);
   }, 300);
  }
 }, [onClose]);
 const onKeyDown = useCallback(
  (e: KeyboardEvent) => {
   if (e.key === "Escape") {
    onCloseHandler();
   }
  },
  [onCloseHandler]
 );
 useEffect(() => {
  if (isOpen) {
   window.addEventListener("keydown", onKeyDown);
  }
  return () => {
   clearTimeout(timerRef.current);
   window.removeEventListener("keydown", onKeyDown);
  };
 }, [isOpen, onKeyDown]);
 return (
  <Portal>
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
     {/* <Button
      onClick={onCloseHandler}
      className={s.closeBtn}
     >
      {"+"}
     </Button> */}
     {children}
    </div>
   </div>
  </Portal>
 );
};
