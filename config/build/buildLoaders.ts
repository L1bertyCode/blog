import { RuleSetRule } from "webpack";

import { buildScssLoader } from "./loaders/buildScssLoader";

export function buildLoaders(
 isDev: boolean
): RuleSetRule[] {
 const svgrLoader = {
  test: /\.svg$/,
  use: ["@svgr/webpack"],
 };
 const fileLoader = {
  test: /\.(png|jpe?g|gif|woff|woff2)$/i,
  use: [
   {
    loader: "file-loader",
   },
  ],
 };
 const babelLoader = {
  test: /\.(js|jsx|ts|tsx)$/,
  exclude: /node_modules/,
  use: {
   loader: "babel-loader",
   options: {
    presets: ["@babel/preset-env"],
    plugins: [
     [
      "i18next-extract",
      { keyAsDefaultValue: true, locales: ["en", "ru"] },
     ],
    ],
   },
  },
 };
 const tsLoader = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
 };
 const scssLoader = buildScssLoader(isDev);
 return [
  babelLoader,
  tsLoader,
  scssLoader,
  svgrLoader,
  fileLoader,
 ];
}
