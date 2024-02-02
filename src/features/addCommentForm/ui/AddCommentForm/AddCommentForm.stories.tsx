import type { Meta, StoryObj } from "@storybook/react";
import AddCommentForm from "./AddCommentForm";
import {
 StoreDecorator,
 ThemeDecorator,
} from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof AddCommentForm> = {
 component: AddCommentForm,
 title: "feature/AddCommentForm",
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;
const data = {
 text: "",
};
export const Light: Story = {
 decorators: [
  StoreDecorator({
   addCommentForm: data,
  }),
 ],
 render: () => (
  <AddCommentForm onSendComment={() => "onSendComment"} />
 ),
};
export const Dark: Story = {
 decorators: [
  StoreDecorator({
   addCommentForm: data,
  }),
  ThemeDecorator(Theme.DARK),
 ],
 render: () => (
  <AddCommentForm onSendComment={() => "onSendComment"} />
 ),
};
export const Blue: Story = {
 decorators: [
  StoreDecorator({
   addCommentForm: data,
  }),
  ThemeDecorator(Theme.BLUE),
 ],
 render: () => (
  <AddCommentForm onSendComment={() => "onSendComment"} />
 ),
};
