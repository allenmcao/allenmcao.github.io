var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
  mode: 'production',
  entry: './app/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  module: {
    rules: [
        {
          test: /\.jsx?/,
          loader: 'babel-loader',
          include: path.join(__dirname, 'app'),
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: ['style', 'css']
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: ExtractTextPlugin.extract('css-loader!sass-loader') 
        },
        { test: /\.woff(\?.*)?$/,  loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&mimetype=application/font-woff' },
        { test: /\.woff2(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&mimetype=application/font-woff2' },
        { test: /\.otf(\?.*)?$/,   loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&mimetype=font/opentype' },
        { test: /\.ttf(\?.*)?$/,   loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&mimetype=application/octet-stream' },
        { test: /\.eot(\?.*)?$/,   loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]' },
        { test: /\.svg(\?.*)?$/,   loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&mimetype=image/svg+xml' },
        { test: /\.(png|jpg)$/,    loader: 'url-loader?limit=8192' },
    ]
  },
  plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('style.css')
  ],
};