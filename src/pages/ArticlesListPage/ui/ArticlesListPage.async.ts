import { lazy } from "react";

export const ArticlesListPageAsync = lazy(
 () =>
  new Promise((res) => {
   setTimeout(
    //@ts-ignore-nent-line
    () => res(import("./ArticlesListPage")),
    1500
   );
  })
);
