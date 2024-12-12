import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/types";

export const buildResolvers = (paths: BuildPaths): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    mainFiles: ["index"],
    modules: [paths.src, "node_modules"],
    alias: {
      "@": paths.src
    }
  };
}; 