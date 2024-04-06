import {
 fireEvent,
 render,
 screen,
} from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation/renderWithTranslation";
import i18nForTests from "@/shared/config/i18n/i18nForTests";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
describe("Sidebar.test", () => {
 test("Sidebar", () => {
  // render(
  //  <BrowserRouter>
  //   <I18nextProvider i18n={i18nForTests}>
  //    <Sidebar />
  //   </I18nextProvider>
  //  </BrowserRouter>
  // );
  // renderWithTranslation(<Sidebar />);
  // expect(screen.getByTestId("sidebar")).toBeInTheDocument();
 });
 //  test("Sidebar test toggle", () => {
 //   renderWithTranslation(<Sidebar />);
 //   const toggleBtn = screen.getByTestId("sidebar-toggle");
 //   expect(screen.getByTestId("sidebar")).toBeInTheDocument();
 //   fireEvent.click(toggleBtn);
 //   expect(screen.getByTestId("sidebar")).toHaveClass(
 //    "collapsed"
 //   );
 //  });
});
