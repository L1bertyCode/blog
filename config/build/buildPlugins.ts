import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildPaths } from "./types/types";
import {
  ProgressPlugin,
  WebpackPluginInstance
} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (paths: BuildPaths): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
      chunkFilename: "css/[name].[contenthash].css",
    })
  ];
};