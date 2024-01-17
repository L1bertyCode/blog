import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./Code";
import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";

const meta: Meta<typeof Code> = {
 component: Code,
 title: "shared/Code",
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Light: Story = {
 render: () => (
  <Code
   text={`import type { Meta, StoryObj } from "@storybook/react";
  
  import { Code } from "./Code";
  import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
  import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";
  
  const meta: Meta<typeof Code> = {
   component: Code,
   title: "shared/Code",
  };
  
  export default meta;
  type Story = StoryObj<typeof Code>;
  
  export const Light: Story = {
   render: () => <Code>Text</Code>,
  };
  `}
  />
 ),
};
export const Dark: Story = {
 decorators: [ThemeDecorator(Theme.DARK)],
 render: () => (
  <Code
   text={`import type { Meta, StoryObj } from "@storybook/react";
 
 import { Code } from "./Code";
 import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
 import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";
 
 const meta: Meta<typeof Code> = {
  component: Code,
  title: "shared/Code",
 };
 
 export default meta;
 type Story = StoryObj<typeof Code>;
 
 export const Light: Story = {
  render: () => <Code>Text</Code>,
 };
 `}
  />
 ),
};
export const Blue: Story = {
 decorators: [ThemeDecorator(Theme.BLUE)],
 render: () => (
  <Code
   text={`import type { Meta, StoryObj } from "@storybook/react";
  
  import { Code } from "./Code";
  import { ThemeDecorator } from "@/shared/config/StorybookDecorators";
  import { Theme } from "@/app/providers/ThemeProvider/ui/ThemeProvider";
  
  const meta: Meta<typeof Code> = {
   component: Code,
   title: "shared/Code",
  };
  
  export default meta;
  type Story = StoryObj<typeof Code>;
  
  export const Light: Story = {
   render: () => <Code>Text</Code>,
  };
  `}
  />
 ),
};
