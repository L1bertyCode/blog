import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
 const mode = env.mode || "development";
 const isDev = mode === "development";
 const paths: BuildPaths = {
  template: path.resolve(__dirname, "public", "index.html"),
  favicon: path.resolve(__dirname, "public", "favicon.ico"),
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: path.resolve(__dirname, "dist"),
  src: path.resolve(__dirname, "src"),
 };
 const PORT = env.port || 5050;
 const config: Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
  port: PORT,
 });
 return config;
};
