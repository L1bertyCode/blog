import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
 buildOptions: BuildOptions
): Configuration {
 const { mode, paths, port, isDev } = buildOptions;
 return {
  mode: mode,
  entry: paths.entry,
  output: {
   path: paths.output,
   filename: "[name].[contenthash].js",
   clean: true,
  },
  module: {
   rules: buildLoaders(isDev),
  },
  plugins: buildPlugins(buildOptions),
  resolve: buildResolvers(paths),
  devtool: isDev ? "inline-source-map" : undefined,
  devServer: isDev ? buildDevServer(port) : undefined,
 };
}
