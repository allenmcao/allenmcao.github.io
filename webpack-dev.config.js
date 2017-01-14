var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      assets: true,
      colors: true,
      version: false,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false
    }
  },
  entry: './app/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['react-hot', 'babel-loader'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
      }
    ]
  },
};