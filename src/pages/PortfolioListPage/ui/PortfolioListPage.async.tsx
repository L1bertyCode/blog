import { lazy } from "react";

export const PortfolioListPageAsync = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(
        //@ts-ignore
        () => resolve(import("./PortfolioListPage")),
        1500
      )
    )
);
