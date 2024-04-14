import type { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/context/ThemeContext";
const meta = {
 title: "shared/Modal",
 component: Modal,
 parameters: {},
 tags: ["autodocs"],
 argTypes: {},
 args: {
  children: <div>123</div>,
  isOpen: true,
 },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
 args: {},
};
export const Dark: Story = {
 args: {},
 decorators: [ThemeDecorator(Theme.DARK)],
};
