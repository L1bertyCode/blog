import { memo, useCallback, useState } from "react";

import s from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";

import { Button } from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal/Modal";

interface NavbarProps {
 className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
 const [isAuth, setIsAuth] = useState(false);

 const { className } = props;
 const { t } = useTranslation();
 const toggleModal = useCallback(() => {
  setIsAuth((prev) => !prev);
 }, []);
 return (
  <div className={classNames(s.navbar, {}, [className])}>
   <AppLink colorType="primaryInverted" to="/">
    +
   </AppLink>
   <Button onClick={toggleModal} colorType="primaryInverted">
    {isAuth ? t("Logout") : t("Login")}
   </Button>
   <Modal isOpen={isAuth} onClose={toggleModal}>
    {
     "5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 "
    }
   </Modal>
  </div>
 );
});
