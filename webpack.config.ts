import path from "path";
import { Configuration } from "webpack";

import { buildPlugins } from "./config/build/buildPlugins";
import { buildLoaders } from "./config/build/buildLoaders";
import { buildResolvers } from "./config/build/buildResolvers";
import { buildDevServer } from "./config/build/buildDevServer";

import { BuildEnv, BuildPaths } from "./config/build/types/types";


export default (() => (env: BuildEnv): Configuration => {

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, "public", "index.html"),
    favicon: path.resolve(__dirname, "public", "favicon.ico"),
    src: path.resolve(__dirname, "src",),
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
    resolve: buildResolvers(paths),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(PORT) : undefined
  };
})();