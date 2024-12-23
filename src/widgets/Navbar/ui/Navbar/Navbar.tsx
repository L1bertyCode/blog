import s from "./Navbar.module.scss";
import { routesConfig } from "@/shared/config/routesConfig/routesConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/feature/ThemeSwitcher";
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from "@/feature/LangSwitcher/LangSwitcher";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { Modal } from "@/shared/ui/Modal/Modal";
import { useState } from "react";


interface NavbarProps {
  className?: string;
};

export const Navbar = ({
  className
}: NavbarProps) => {

  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onToggleModal = () => {
    setIsAuthModal(prev => !prev);
  };

  const { t } = useTranslation();
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <AppLink to={"/"}>{t("Logo")}</AppLink>

      <div>
        {Object.values(routesConfig).map((r) => (
          r.name && <AppLink
            key={r.path}
            className={s.link}
            to={r.path || "/"}
          >
            {r.name}</AppLink>
        ))}
      </div>
      <AppButton  onClick={onToggleModal}>Войти...</AppButton>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggleModal}
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio doloribus rem sequi ratione. Iusto dolore quos, rerum alias id, nemo autem vel eveniet optio repellat tempora quod eligendi voluptates veniam?...</Modal>

    </div>
  );
};