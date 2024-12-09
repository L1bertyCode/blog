import { RuleSetRule } from "webpack";

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  return [
    tsLoader
  ];
};