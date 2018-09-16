var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var env = process.env.NODE_ENV || 'development';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/example/Example.js',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
    output: {filename: 'bundle.js', path: path.resolve('example')},
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
         NODE_ENV: '"' + env + '"'
        }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          include: [path.resolve('src')]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it use publicPath in webpackOptions.output
                publicPath: '../'
              }
            },
            "css-loader"
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loaders: ['eslint-loader'],
          include: [path.resolve('src')]
        }
      ]
    },
    resolve: { extensions: ['.js'] },
    stats: { colors: true },
    devServer: {
      hot: true,
      historyApiFallback: true,
      stats: {
        chunkModules: false,
        colors: true
      }
    }
};
