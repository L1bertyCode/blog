import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/context/ThemeContext";

const meta = {
 title: "shared/Sidebar",
 component: Sidebar,
 parameters: {},
 tags: ["autodocs"],
 argTypes: {},
 args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primar: Story = {
 args: {},
};
export const Dark: Story = {
 args: {},
 decorators: [ThemeDecorator(Theme.DARK)],
};
