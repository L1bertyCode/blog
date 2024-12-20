import { AppButton } from "./AppButton";
import { render, screen } from "@testing-library/react";

describe('AppButon', () => {
  test('test render', () => {
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
  test('variant clear', () => {
    render(<AppButton variant="clear">TEST</AppButton>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});