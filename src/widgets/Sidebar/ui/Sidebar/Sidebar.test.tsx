import {
 fireEvent,
 render,
 screen,
} from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { ComponentRender } from "@/shared/lib/tests/ComponentRender/ComponentRender";

describe("Sidebar.test", () => {
 test("Sidebar", () => {
  // ComponentRender(<Sidebar />);
  // expect(screen.getByTestId("sidebar")).toBeInTheDocument();
 });
 test("Sidebar test toggle", () => {
  // ComponentRender(<Sidebar />);
  // const toggleBtn = screen.getByTestId("sidebar-toggle");
  // expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  // fireEvent.click(toggleBtn);
  // expect(screen.getByTestId("sidebar")).toHaveClass(
  //  "collapsed"
  // );
 });
});
