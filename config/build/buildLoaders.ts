import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = (isDev: boolean): RuleSetRule[] => {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  };
  const scssLoader = {
    test: /\.(sc|sa|c)ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin,
      "css-loader",
      "sass-loader",
    ],
  };

  return [
    babelLoader,
    tsLoader,
    scssLoader
  ];
};