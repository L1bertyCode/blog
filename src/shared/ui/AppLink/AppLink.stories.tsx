import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "./AppLink";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/context/ThemeContext";

const meta = {
 title: "shared/AppLink",
 component: AppLink,
 parameters: {},
 tags: ["autodocs"],
 argTypes: {},
 args: { children: "AppLink", to: "/" },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
 args: {},
};
export const Dark: Story = {
 args: {},
 decorators: [ThemeDecorator(Theme.DARK)],
};
