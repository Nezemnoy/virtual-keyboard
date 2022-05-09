const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const isDev = process.env.NODE_ENV ==='development';

module.exports = {
  mode: 'development',
  entry: './src/scripts/index.js',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Keyboard',
      filename: 'index.html',
      template: 'src/index.html'
    })  
  ],
  module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    },
    {
      test: /\.js$/i,
      exclude: /node_modules/,
      use: ['eslint-loader']
    },

  ],
 },
 devServer: {
    static: './dist',
    port:3802
  },
    devtool: 'source-map'
};