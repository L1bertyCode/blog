import type { Meta, StoryObj } from "@storybook/react";

import PortfolioItemPage from "./PortfolioItemPage";
import {
  StoreDecorator,
  ThemeDecorator,
} from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";
import avatar from "@/shared/assets/tests/storybook.jpg";
const meta: Meta<typeof PortfolioItemPage> = {
  component: PortfolioItemPage,
  title: "pages/PortfolioItemPage",
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof PortfolioItemPage>;

export const Light: Story = {
  render: () => <PortfolioItemPage />,
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <PortfolioItemPage />,
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <PortfolioItemPage />,
};
