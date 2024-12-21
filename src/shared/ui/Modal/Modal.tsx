import { useTranslation } from "react-i18next";
import s from "./Modal.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ReactNode } from "react";
interface ModalProps {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
};
export const Modal = ({
  children,
  className,
  isOpen,
  onClose
}: ModalProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(s.modal, { [s.opened]: isOpen }, [className])}>
      <div
        onClick={() => {
          onClose?.();
        }}
        className={s.overlay}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={s.content}>
          123
          {children}
        </div>
      </div>
    </div>
  );
};