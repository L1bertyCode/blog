import type { Meta, StoryObj } from "@storybook/react";

import ArticlesListPage from "./ArticlesListPage";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/context/ThemeContext";

const meta = {
 title: "pages/ArticlesListPage",
 component: ArticlesListPage,
 parameters: {},
 tags: ["autodocs"],
 argTypes: {},
 args: {},
} satisfies Meta<typeof ArticlesListPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
 args: {},
 render: () => <ArticlesListPage />,
};
export const Dark: Story = {
 args: {},
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => <ArticlesListPage />,
};
