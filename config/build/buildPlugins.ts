import HtmlWebpackPlugin from "html-webpack-plugin";
import {
 ProgressPlugin,
 WebpackPluginInstance,
} from "webpack";
import { BuildPaths } from "./types/config";

export function buildPlugins(
 paths: BuildPaths
): WebpackPluginInstance[] {
 return [
  new HtmlWebpackPlugin({
   template: paths.template,
   favicon: paths.favicon,
  }),
  new ProgressPlugin(),
 ];
}
