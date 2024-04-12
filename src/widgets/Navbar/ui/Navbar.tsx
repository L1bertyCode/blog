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
    Lorem ipsum dolor, sit amet consectetur adipisicing
    elit. Tempora autem culpa praesentium illo expedita et
    quia laborum voluptas eveniet tenetur voluptate est
    ullam dolorem totam nulla, harum deserunt, dolorum
    numquam, eos sit quibusdam provident ea ipsam? Provident
    cupiditate sit atque optio! Eius, vero quisquam quod,
    totam impedit fugiat, minima illo blanditiis placeat
    possimus pariatur. Maiores illo, quae delectus tempore
    nisi non harum iure sit deleniti tenetur asperiores
    neque quia eligendi repellat a et, fugiat corporis
    molestias. Dolores velit architecto neque aut quibusdam
    numquam. Vel tenetur enim nam magnam est explicabo
    mollitia consectetur illo dicta expedita. Vel
    consequuntur magni velit repellat?
   </Modal>
  </div>
 );
});
