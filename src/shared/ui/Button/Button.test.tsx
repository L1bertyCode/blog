import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
describe("Button", () => {
 test("Button ", () => {
  render(<Button>Test</Button>);
  expect(screen.getByText("Test")).toBeInTheDocument();
 });
 test("Button outlined", () => {
  render(<Button variant="outlined">Test</Button>);
  expect(screen.getByText("Test")).toHaveClass("outlined");
  screen.debug();
 });
});
