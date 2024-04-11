import i18nForTests from "@/shared/config/i18n/i18nForTests";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
export interface RenderWithRouterOptions {
 route?: string;
}
export const ComponentRender = (
 conponent: ReactNode,
 options: RenderWithRouterOptions = {}
) => {
 const { route = "/" } = options;
 return render(
  <MemoryRouter initialEntries={[route]}>
   <I18nextProvider i18n={i18nForTests}>
    {conponent}
   </I18nextProvider>
  </MemoryRouter>
 );
};
