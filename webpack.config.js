/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
  output: {
    library: 'syntek',
    libraryTarget: 'umd',
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
};
