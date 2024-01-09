import type { Meta, StoryObj } from "@storybook/react";

import PortfolioListPage from "./PortfolioListPage";
import {
  StoreDecorator,
  ThemeDecorator,
} from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import avatar from "@/shared/assets/tests/storybook.jpg";
const meta: Meta<typeof PortfolioListPage> = {
  component: PortfolioListPage,
  title: "pages/PortfolioListPage",
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof PortfolioListPage>;

export const Light: Story = {
  render: () => <PortfolioListPage />,
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <PortfolioListPage />,
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <PortfolioListPage />,
};
