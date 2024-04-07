import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button.test", () => {
 test("clear variant", () => {
  render(<Button>Test</Button>);
  expect(screen.getByText("Test")).toHaveClass("clear");
  screen.debug();
 });
});
