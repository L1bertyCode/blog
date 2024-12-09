import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/types";
import {
  ProgressPlugin,
  WebpackPluginInstance
} from "webpack";

export const buildPlugins = (paths: BuildPaths): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon
    }),
    new ProgressPlugin()
  ];
};