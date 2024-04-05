import type { Meta, StoryObj } from "@storybook/react";

import { PageLoader } from "./PageLoader";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/context/ThemeContext";

const meta = {
 title: "widgets/PageLoader",
 component: PageLoader,
 parameters: {},
 tags: ["autodocs"],
 argTypes: {},
 args: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
 args: {},
 render: () => <PageLoader />,
};
export const Dark: Story = {
 args: {},
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => <PageLoader />,
};
