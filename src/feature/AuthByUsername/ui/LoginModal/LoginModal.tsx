import s from "./LoginModal.module.scss";
import { Modal } from "@/shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
};
export const LoginModal = ({
  isOpen,
  onClose,
  className
}: LoginModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={s.loginModal}>
      <LoginForm />
    </Modal>
  );
};