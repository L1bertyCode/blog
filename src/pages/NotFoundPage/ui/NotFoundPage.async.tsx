import { lazy } from "react";

export const NotFoundPageAsync = lazy(() => new Promise(res =>
  //@ts-ignore
  setTimeout(() => res(import("./NotFoundPage")), 1500)
));