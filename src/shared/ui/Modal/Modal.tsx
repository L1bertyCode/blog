import { ReactNode } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Modal.module.scss";

interface ModalProps {
 children: ReactNode;
 className?: string;
 onClose: () => void;
}

export const Modal = (props: ModalProps) => {
 const { children, onClose, className } = props;
 return (
  <div
   onClick={onClose}
   className={classNames(s.modal, {}, [className])}
  >
   {children}
  </div>
 );
};
