import type { Meta, StoryObj } from "@storybook/react";
import { CommentItem } from "./CommentItem";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof CommentItem> = {
 component: CommentItem,
 title: "entities/CommentItem",
};

export default meta;
type Story = StoryObj<typeof CommentItem>;
const comment = {
 id: "1",
 text: "some comments",
 user: {
  id: "1",
  username: "admin",
 },
};
export const Light: Story = {
 render: () => <CommentItem commentDetails={comment} />,
};
export const Dark: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => <CommentItem commentDetails={comment} />,
};
export const Blue: Story = {
 decorators: [ThemeDecorator(Theme.BLUE)],
 render: () => <CommentItem commentDetails={comment} />,
};
export const LightIsLoading: Story = {
 render: () => (
  <CommentItem commentDetails={comment} isLoading={true} />
 ),
};
export const DarkIsLoading: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => (
  <CommentItem commentDetails={comment} isLoading={true} />
 ),
};
export const BlueIsLoading: Story = {
 decorators: [ThemeDecorator(Theme.BLUE)],
 render: () => (
  <CommentItem commentDetails={comment} isLoading={true} />
 ),
};
