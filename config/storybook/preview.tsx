import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";
import { Theme } from "../../src/shared/context/ThemeContext";
const preview: Preview = {
 parameters: {
  controls: {
   matchers: {
    color: /(background|color)$/i,
    date: /Date$/i,
   },
  },
 },
 decorators: [
  RouteDecorator,
  StyleDecorator,
  ThemeDecorator(Theme.LIGHT),
 ],
};

export default preview;
