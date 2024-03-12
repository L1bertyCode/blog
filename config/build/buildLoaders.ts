import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(
 isDev: boolean
): RuleSetRule[] {
 const tsLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
 };
 const scssLoader = {
  test: /\.s[ac]ss$/i,
  use: [
   isDev ? "style-loader" : MiniCssExtractPlugin.loader,
   {
    loader: "css-loader",
    options: {
     modules: {
      auto: /\.module\.\w+$/i,
      localIdentName: isDev
       ? "[path][name]__[local]--[hash:base64:5]"
       : "[hash:base64:8]",
     },
    },
   },
   ,
   "sass-loader",
  ],
 };
 return [tsLoader, scssLoader];
}
