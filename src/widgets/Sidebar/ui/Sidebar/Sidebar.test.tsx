import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { MemoryRouter } from "react-router-dom";
import { withTranslation } from "react-i18next";
import '@/shared/config/i18n/i18n';

beforeEach(() => {
  jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: () => ['key'] }),
    Trans: () => jest.fn(),
    t: () => jest.fn(),
  }));

});
// const WithTranslation=withTranslation()(Sidebar)
describe('Sidebar', () => {
  test('Sidebar render', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
    // expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    screen.debug();
  });
});