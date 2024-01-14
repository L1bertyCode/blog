import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: "shared/Skeleton",
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Light: Story = {
  render: () => <Skeleton />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Skeleton />,
};

export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Skeleton  />,
};
export const LightCircle: Story = {
  render: () => <Skeleton borderRadius="50%"/>,
};

export const DarkCircle: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  render: () => <Skeleton borderRadius="50%"/>,
};

export const BlueCircle: Story = {
  decorators: [ThemeDecorator(Theme.BLUE)],
  render: () => <Skeleton  borderRadius="50%"/>,
};
