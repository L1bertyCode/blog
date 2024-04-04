import { memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import s from "./Loader.module.scss";

interface LoaderProps {
 className?: string;
}

export const Loader = memo((props: LoaderProps) => {
 const { className } = props;
 return (
  <div
   className={classNames(s.loader, {}, [
    s.ellipsis,
    className,
   ])}
  >
   <div />
   <div />
   <div />
   <div />
  </div>
 );
});
