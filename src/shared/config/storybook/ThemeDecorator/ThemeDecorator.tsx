import { Theme } from "@/shared/context/ThemeContext";
import { StoryFn } from "@storybook/react";

export const ThemeDecorator =
 (theme?: Theme) => (Story: StoryFn) => (
  <div style={{ width: "100%" }} className={`app app_${theme}_theme`}>
   <Story />
  </div>
 );
