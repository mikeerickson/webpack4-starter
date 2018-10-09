import path from 'path';
import WebpackNotifierPlugin from 'webpack-notifier';

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'bundle.js'
  },
  plugins: [
    new WebpackNotifierPlugin(),
  ]
};

export default config;