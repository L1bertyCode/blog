import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/context/ThemeContext";

const meta = {
 title: "shared/Button",
 component: Button,
 parameters: {},
 tags: ["autodocs"],
 argTypes: {},
 args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
 args: {
  children: "Button",
  variant: "clear",
 },
};
export const ClearDark: Story = {
 args: {
  children: "Button",
  variant: "clear",
 },
 decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outlined: Story = {
 args: {
  children: "Button",
  variant: "outlined",
 },
};
export const OutlinedDark: Story = {
 args: {
  children: "Button",
  variant: "outlined",
 },
 decorators: [ThemeDecorator(Theme.DARK)],
};
