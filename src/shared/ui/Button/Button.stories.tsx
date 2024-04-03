import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/context/ThemeContext";

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
export const ClearInverted: Story = {
 args: {
  children: "Button",
  variant: "clear-inverted",
 },
 render: () => (
  <div style={{ background: "lightgray" }}>
   <Button variant="clear-inverted">{"Button"}</Button>
  </div>
 ),
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
 render: () => (
  <div style={{ background: "lightgray" }}>
   <Button variant="outlined-inverted">{"Button"}</Button>
  </div>
 ),
};
