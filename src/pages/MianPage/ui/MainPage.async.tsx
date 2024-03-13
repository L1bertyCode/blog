import { lazy } from "react";

export const MainPageAsync = lazy(
 () =>
  new Promise((res) => {
   setTimeout(
    //@ts-ignore-nent-line
    () => res(import("./MainPage"),1500)
   );
  })
);
