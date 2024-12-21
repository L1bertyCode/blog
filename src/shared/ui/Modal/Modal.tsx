import { useTranslation } from "react-i18next";
import s from "./Modal.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ReactNode } from "react";
interface ModalProps {
  children?: ReactNode;
  className?: string;
};
export const Modal = ({
  children,
  className
}: ModalProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.modal, {}, [className])}>
      <div className={s.overlay}>
        <div className={s.content}>
          {children}
        </div>
      </div>
    </div>
  );
};