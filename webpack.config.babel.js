/** ES6 import support
 * Support ES6 imports based on .babelrc configuration and configuration file
 * defined as `webpack.config.babel.js`
 * -- run dev -- or -- run dev:watch
 */

import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import WebpackNotifierPlugin from 'webpack-notifier';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

const webpackConfig = {
  stats: 'errors-only',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js'
  },
  plugins: [
    new WebpackNotifierPlugin({title: 'Webpack Status', excludeWarnings: true}),
    new ProgressBarPlugin({
      format: '  Building [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
      clear: true
    })
  ]
};

export default webpackConfig;