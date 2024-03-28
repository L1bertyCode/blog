import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
 title: "Example/Button",
 component: Button,
 parameters: {
  // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  layout: "centered",
 },

 tags: ["autodocs"],

 argTypes: {},

 args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
 args: {
  children: "Button",
 },
};
