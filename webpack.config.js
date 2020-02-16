const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseDir = path.resolve(__dirname, 'src');
const distRoot = path.resolve('public');
const sourceFilepath = path.resolve(baseDir, 'example/template.html');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: sourceFilepath,
  filename: 'index.html',
  hash: true,
});

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: [
      './src/example/discountPercent',
    ]
  },
  output: {
    path: distRoot,
    filename: '[name]-dist.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },
  plugins: [
    htmlWebpackPlugin,
  ]
};