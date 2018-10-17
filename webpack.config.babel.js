/**
 * ES6 import support
 * Support ES6 imports based on .babelrc configuration and configuration file
 * defined as `webpack.config.babel.js`
 *   -- npm run dev -- or -- npm run dev:watch
 *   -- npm run build
 */

import path from "path";
import chalk from "chalk";
import webpack from "webpack";
import WebpackNotifierPlugin from "webpack-notifier";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import TodoWebpackPlugin from "todo-webpack-plugin";
import StyleLintWebpackPlugin from "stylelint-webpack-plugin";

const webpackConfig = {
  stats: "errors-only",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ["babel-loader", "eslint-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({ title: "Webpack Build Status", excludeWarnings: true }),
    new ProgressBarPlugin({
      width: 50,
      format: chalk.green.bold("  Building [:bar] :percent (:elapsed seconds)")
    }),
    new TodoWebpackPlugin({
      console: true,
      tags: ["info", "review"]
    }),
    new StyleLintWebpackPlugin({
      files: "./src/**/*.s?(a|c)ss"
    })
  ]
};

export default webpackConfig;
