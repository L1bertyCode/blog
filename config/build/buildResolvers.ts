import { ResolveOptions } from "webpack";
import { BuildPaths } from "./types/config";

export function buildResolvers(
 paths: BuildPaths
): ResolveOptions {
 return {
  extensions: [".tsx", ".ts", ".js"],
  alias: {
   "@": paths.src,
  },
  preferAbsolute: true,
  modules: [paths.src, "node_modules"],
  mainFiles: ["index"],
 };
}
