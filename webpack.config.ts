import { BuildEnv, BuildPaths } from "./config/build/types/types";
import path from "path";
import { Configuration } from "webpack";
import { buildPlugins } from "./config/build/buildPlugins";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildResolvers } from "./config/build/buildResolvers";
import { buildDevServer } from "./config/build/buildDevServer";



module.exports = (env: BuildEnv): Configuration => {

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "index.tsx"),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, "public", "index.html"),
    favicon: path.resolve(__dirname, "public", "favicon.ico"),
  };
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name][contenthash].js',
      clean: true
    },
    plugins: buildPlugins(paths),
    module: {
      rules: buildLoaders(isDev)
    },
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(PORT) : undefined
  };
};