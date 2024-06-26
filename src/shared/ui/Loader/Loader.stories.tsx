import type { Meta, StoryObj } from "@storybook/react";

import { Loader } from "./Loader";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/context/ThemeContext";

const meta = {
 title: "shared/Loader",
 component: Loader,
 parameters: {},
 tags: ["autodocs"],
 argTypes: {},
 args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
 args: {},
};
export const Dark: Story = {
 args: {},
 decorators: [ThemeDecorator(Theme.DARK)],
};
