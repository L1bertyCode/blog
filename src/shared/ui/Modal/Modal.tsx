import { MouseEvent, ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Modal.module.scss";

interface ModalProps {
 children: ReactNode;
 className?: string;
 isOpen: boolean;
 onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
 const { children, isOpen, onClose, className } = props;
 return (
  <div
   onClick={() => onClose?.()}
   className={classNames(s.modal, { [s.isOpen]: isOpen }, [
    className,
   ])}
  >
   <div
    onClick={(e: MouseEvent) => e.stopPropagation()}
    className={s.content}
   >
    {children}
   </div>
  </div>
 );
};
