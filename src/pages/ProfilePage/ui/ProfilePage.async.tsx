import { lazy } from "react";

export const ProfilePageAsync = lazy(
  () => new Promise(res =>
    setTimeout(() => res(
      //@ts-ignore
      import("./ProfilePage")
    ), 1500
    ))
);