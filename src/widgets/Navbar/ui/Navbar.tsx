import { memo, useState } from "react";

import s from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames/classNames";

import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal/Modal";

interface NavbarProps {
 className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
 const [isAuth, setIsAuth] = useState(false);
 const [isOpen, setIsOpen] = useState(false);
 const { className } = props;
 const { t } = useTranslation();
 const toggleModal = (bool: boolean) => {
  setIsAuth(bool);
 };
 return (
  <div className={classNames(s.navbar, {}, [className])}>
   <AppLink colorType="inverted" to="/">
    +
   </AppLink>
   <Button onClick={() => setIsOpen(true)}>
    {isAuth ? (
     <Text text={t("Logout")} colorType="inverted" />
    ) : (
     <Text text={t("Login")} colorType="inverted" />
    )}
   </Button>
   <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
    {
     "5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 5 5 20 20 "
    }
   </Modal>
  </div>
 );
});
