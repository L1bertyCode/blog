import s from "./LoginModal.module.scss";
import { Modal } from "@/shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
interface LoginModalProps {
  className?: string;
};
export const LoginModal = ({ className }: LoginModalProps) => {
  return (
    <Modal className={s.loginModal}>
      <LoginForm />
    </Modal>
  );
};