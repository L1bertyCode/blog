import { lazy } from "react";

export const PortfolioItemPageAsync = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        //@ts-ignore
        () => resolve(import("./PortfolioItemPage")),
        1500
      )
    )
);
