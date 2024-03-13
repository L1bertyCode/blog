export type BuildMode = "development" | "production";

export interface BuildEnv {
 mode: BuildMode;
 port: number;
}

export interface BuildPaths {
 template: string;
 favicon: string;
 entry: string;
 output: string;
 src: string;
}

export interface BuildOptions {
 mode: BuildMode;
 paths: BuildPaths;
 isDev: boolean;
 port: number;
}
