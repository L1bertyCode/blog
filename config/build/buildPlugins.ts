import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions, BuildPaths } from "./types/types";
import {
  DefinePlugin,
  ProgressPlugin,
  WebpackPluginInstance
} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({ paths, isDev }: { paths: BuildPaths, isDev: boolean; }): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: paths.favicon
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    })
  ];
};