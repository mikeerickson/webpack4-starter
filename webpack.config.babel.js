/** ES6 import support
 * Support ES6 imports based on .babelrc configuration and configuration file
 * defined as `webpack.config.babel.js`
 * -- run dev -- or -- run dev:watch
 */

import path from 'path';
import WebpackNotifierPlugin from 'webpack-notifier';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js'
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ]
};

export default config;