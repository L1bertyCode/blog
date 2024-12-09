export type BuildMode = "development" | "production";
export type BuildEnv = {
  port: number;
  mode: BuildMode;
};
export type BuildPaths = {
  entry: string;
  build: string;
  html: string;
  favicon: string;
};

export type BuildOptions = {
  paths: BuildPaths;
  mode: BuildMode;
  port: number;
  isDev: boolean;
};
