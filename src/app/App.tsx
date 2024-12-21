import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router/AppRouter";

import { classNames } from "@/shared/lib/classNames/classNames";
import s from "./App.module.scss";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense, useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";


interface AppProps { };
export const App = ({ }: AppProps) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalToggle = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className={classNames(`app app_${theme}_theme`, {}, [])}>
      <Suspense fallback={<></>}>
        <Navbar onOpen={modalToggle} />
        <Modal
          isOpen={isOpen}
          onClose={modalToggle}
        />
        <div className={s.content}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
