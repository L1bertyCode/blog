import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildScssLoader } from "../build/loaders/buildScssLoader";

const config: StorybookConfig = {
 stories: [
  "../../src/**/*.mdx",
  "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
 ],
 addons: [
  "@storybook/addon-webpack5-compiler-swc",
  "@storybook/addon-onboarding",
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@chromatic-com/storybook",
  "@storybook/addon-interactions",
 ],
 framework: {
  name: "@storybook/react-webpack5",
  options: {},
 },
 docs: {
  autodocs: "tag",
 },
 swc: () => ({
  jsc: {
   transform: {
    react: {
     runtime: "automatic",
    },
   },
  },
 }),
 webpackFinal: async (config) => {
  const paths: BuildPaths = {
   template: "",
   favicon: "",
   entry: "",
   output: "",
   src: path.resolve(__dirname, "..", "..", "src"),
  };
  config!.resolve!.modules?.push(paths.src);
  config!.resolve!.alias = {
   "@": paths.src,
  };
  config!.resolve!.extensions = [".tsx", ".ts", ".js"];
  config!.module!.rules!.push(buildScssLoader(true));
  return config;
 },
};
export default config;
