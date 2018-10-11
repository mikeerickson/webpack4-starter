/** ES6 import support
 * Support ES6 imports based on .babelrc configuration and configuration file
 * defined as `webpack.config.babel.js`
 * -- run dev -- or -- run dev:watch
 */

import path from "path";
import chalk from "chalk";
import webpack from "webpack";
import WebpackNotifierPlugin from "webpack-notifier";
import ProgressBarPlugin from "progress-bar-webpack-plugin";

const webpackConfig = {
  stats: "errors-only",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: "bundle.js"
  },
  module: {

    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]

  },
  plugins: [
    new WebpackNotifierPlugin({ title: "Webpack Build Status", excludeWarnings: true }),
    new ProgressBarPlugin({
      width: 50,
      format: chalk.yellow.bold("  Building [:bar] :percent (:elapsed seconds)")
    })
  ]
};

export default webpackConfig;