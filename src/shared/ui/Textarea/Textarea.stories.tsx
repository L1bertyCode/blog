import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./Textarea";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Textarea> = {
 component: Textarea,
 title: "shared/Textarea",
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Light: Story = {
 render: () => <Textarea autoFocus label={"Username"} />,
};

export const Dark: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => <Textarea autoFocus label={"Username"} />,
};

export const Blue: Story = {
 decorators: [ThemeDecorator(Theme.BLUE)],
 render: () => <Textarea autoFocus label={"Username"} />,
};
