import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/types";

export const buildResolvers = (paths: BuildPaths): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@": paths.src
    }
  };
}; 