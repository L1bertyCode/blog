import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";
import {
 ThemeDecorator,
} from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof CommentList> = {
 component: CommentList,
 title: "entities/CommentList",
};

export default meta;
type Story = StoryObj<typeof CommentList>;
const comments = [
 {
  id: "1",
  text: "some comments",
  user: {
   id: "1",
   username: "admin",
  },
 },
 {
  id: "2",
  text: "some comment",
  user: {
   id: "2",
   username: "user",
  },
 },
];
export const Light: Story = {
 render: () => <CommentList comments={comments} />,
};
export const Dark: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => <CommentList comments={comments} />,
};
export const Blue: Story = {
 decorators: [ThemeDecorator(Theme.BLUE)],
 render: () => <CommentList comments={comments} />,
};
export const LightIsLoading: Story = {
 render: () => <CommentList isLoading={true} />,
};
export const DarkIsLoading: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => <CommentList isLoading={true} />,
};
export const BlueIsLoading: Story = {
 decorators: [ThemeDecorator(Theme.BLUE)],
 render: () => <CommentList isLoading={true} />,
};
export const LightNoComments: Story = {
 render: () => <CommentList />,
};
export const DarkNoComments: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => <CommentList />,
};
export const BlueNoComments: Story = {
 decorators: [ThemeDecorator(Theme.BLUE)],
 render: () => <CommentList />,
};
