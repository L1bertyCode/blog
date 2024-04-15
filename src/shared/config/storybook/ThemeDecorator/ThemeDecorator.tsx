import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Theme } from "@/shared/context/ThemeContext";
import { StoryFn } from "@storybook/react";

export const ThemeDecorator =
 (theme?: Theme) => (Story: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
   <div className={`app app_${theme}_theme`}>
    <Story />
   </div>
  </ThemeProvider>
 );
