import HtmlWebpackPlugin from "html-webpack-plugin";
import {
 ProgressPlugin,
 WebpackPluginInstance,
} from "webpack";
import { BuildOptions, BuildPaths } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
 paths,
 isDev,
}: BuildOptions): WebpackPluginInstance[] {
 return [
  new HtmlWebpackPlugin({
   template: paths.template,
   favicon: paths.favicon,
  }),
  new ProgressPlugin(),
  new MiniCssExtractPlugin({
   filename: "css/[name].[contenthash:8].css",
   chunkFilename: "css/[name].[contenthash:8].css",
  }),
 ];
}
