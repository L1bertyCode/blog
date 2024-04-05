import type { Meta, StoryObj } from "@storybook/react";

import { ThemeSwitcher } from "./ThemeSwitcher";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/context/ThemeContext";

const meta = {
 title: "widgets/ThemeSwitcher",
 component: ThemeSwitcher,
 parameters: {},
 tags: ["autodocs"],
 argTypes: {},
 args: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
 args: {},
 render: () => (
  <div style={{ background: "darkblue" }}>
   <ThemeSwitcher />
  </div>
 ),
};
export const Dark: Story = {
 args: {},
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => (
  <div style={{ background: "lightgray" }}>
   <ThemeSwitcher />
  </div>
 ),
};
