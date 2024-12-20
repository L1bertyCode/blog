import { AppButton } from "./AppButton";
import { render, screen } from "@testing-library/react";

describe('AppButon', () => {
  test('should first', () => {
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});