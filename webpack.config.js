const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const baseDir = path.resolve(__dirname, 'src');
const distRoot = path.resolve('public');
const sourceFilepath = path.resolve(baseDir, 'example/limitConfig/template.html');

dotenv.config();

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: sourceFilepath,
  filename: 'index.html',
  hash: true,
});

const {
  API_BASE_URL
} = process.env;

console.log('process.env.API_BASE_URL', API_BASE_URL);

const environmentPlugin = new webpack.EnvironmentPlugin({
  API_BASE_URL,
});

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    app: [
      './src/example/limitConfig',
    ]
  },
  output: {
    path: distRoot,
    filename: '[name]-dist.js'
  },
  module: {
    rules: [

    ]
  },
  plugins: [
    htmlWebpackPlugin,
    environmentPlugin,
  ]
};