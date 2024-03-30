import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import "@/app/styles/index.scss";
const meta = {
 title: "shared/Button",
 component: Button,
 parameters: {
  layout: "centered",
 },
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

export const Outlined: Story = {
 args: {
  children: "Button",
  variant: "outlined",
 },
};
export const OutlinedInverted: Story = {
 args: {
  children: "Button",
  variant: "outlined-inverted",
 },
};
