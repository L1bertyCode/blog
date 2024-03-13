import { lazy } from "react";

export const NotFoundPageAsync = lazy(
 () =>
  new Promise((res) => {
   setTimeout(
    //@ts-ignore-nent-line
    res(import("./NotFoundPage")),
    1500
   );
  })
);
