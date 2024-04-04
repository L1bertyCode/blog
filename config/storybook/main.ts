import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildScssLoader } from "../build/loaders/buildScssLoader";
import { RuleSetRule } from "webpack";

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
   ...config!.resolve!.alias,
   "@": paths.src,
  };
  config!.resolve!.extensions = [".tsx", ".ts", ".js"];
  config!.module!.rules!.push(buildScssLoader(true));

  if (config?.module?.rules) {
   const imageRule = config.module?.rules?.find((rule) => {
    if (rule) {
     if (
      typeof rule !== "string" &&
      rule.test instanceof RegExp
     ) {
      return rule.test.test(".svg");
     }
    }
   });

   if (imageRule && typeof imageRule !== "string") {
    imageRule.exclude = /\.svg$/;
   }
   config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
   });
  }

  return config;
 },
};
export default config;
