var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: './app/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/app/assets/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};