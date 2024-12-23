import { useTranslation } from "react-i18next";
import s from "./Modal.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Portal } from "../Portal/Portal";

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
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const [isClosing, setIsClosing] = useState<boolean>(false);

  const closeHadndler = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose?.();
      setIsClosing(false);
    }, 300);
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeHadndler();
    }
  }, [closeHadndler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      clearInterval(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);


  return (
    <Portal>
      <div className={classNames(s.modal, { [s.opened]: isOpen, [s.isClosing]: isClosing }, [className])}>
        <div
          onClick={closeHadndler}
          className={s.overlay}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={s.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>

  );
};