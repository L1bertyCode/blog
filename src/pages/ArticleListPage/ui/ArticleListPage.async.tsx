import { resolve } from "path";
import { lazy } from "react";

export const ArticleListPageAsync = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        //@ts-ignore
        () => resolve(import("./ArticleListPage")),
        1500
      )
    )
);
