import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration, ProgressPlugin } from "webpack";

type Mode = "development" | "production";

const mode = "development";
const isDev = mode === "development";

const config: Configuration = {
 mode: "production",
 entry: path.resolve(__dirname, "src", "index.ts"),
 output: {
  path: path.resolve(__dirname, "dist"),
  filename: "[name].[contenthash].js",
  clean: true,
 },
 module: {
  rules: [
   {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: path.resolve(
    __dirname,
    "public",
    "index.html"
   ),
   favicon: path.resolve(
    __dirname,
    "public",
    "favicon.ico"
   ),
  }),
  new ProgressPlugin(),
 ],
 resolve: {
  extensions: [".tsx", ".ts", ".js"],
 },
};
export default config;
