import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Card> = {
 component: Card,
 title: "shared/Card",
};

export default meta;
type Story = StoryObj<typeof Card>;
export const Light: Story = {
 render: () => <Card>Card</Card>,
};
export const Dark: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => <Card>Card</Card>,
};
export const Blue: Story = {
 decorators: [ThemeDecorator(Theme.BLUE)],
 render: () => <Card>Card</Card>,
};
