import HtmlWebpackPlugin from "html-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import {
 DefinePlugin,
 ProgressPlugin,
 WebpackPluginInstance,
} from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({
 paths,
 isDev,
}: BuildOptions): WebpackPluginInstance[] {
 const plugins = [
  new HtmlWebpackPlugin({
   template: paths.template,
   favicon: paths.favicon,
  }),
  new ProgressPlugin(),
  new MiniCssExtractPlugin({
   filename: "css/[name].[contenthash:8].css",
   chunkFilename: "css/[name].[contenthash:8].css",
  }),
  new DefinePlugin({
   __IS_DEV__: JSON.stringify(isDev),
  }),
 ];
 if (isDev) {
  plugins.push(
   new BundleAnalyzerPlugin({
    openAnalyzer: false,
   })
  );
 }
 return plugins;
}
