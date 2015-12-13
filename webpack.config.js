var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var env = process.env.NODE_ENV || 'development';

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
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.js$/, 
          loaders: ['react-hot', 'babel'],
          include: [path.resolve('src')]
        }
      ],
      preLoaders: [
        {
          test: /\.js$/, 
          loaders: ['eslint-loader'], 
          include: [path.resolve('src')]
        }
      ]   
    },
    resolve: { extensions: ['', '.js'] },
    stats: { colors: true },
    eslint: { configFile: 'src/.eslintrc' },
    devServer: {
      hot: true,
      historyApiFallback: true,
      stats: {
        chunkModules: false,
        colors: true
      }
    }
};
