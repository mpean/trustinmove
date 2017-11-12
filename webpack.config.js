const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const prod = process.argv.indexOf('-p') !== -1;
const dev = process.argv.indexOf('-d') !== -1;

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path:
      path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(html)$/, loader: 'html-loader' },
      { test: /\.css$/, loader: [ 'style-loader', 'css-loader' ] },
      { test: /\.(png|woff|woff2|eot|ttf|svg|jpg|ico)$/, loader: 'url-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new HtmlWebpackPlugin({ title: 'Trust in Move' })
  ]
};

if (dev) {
  config.devtool = 'inline-source-map';
} else if (prod) {
  // nothing
}

module.exports = config;
