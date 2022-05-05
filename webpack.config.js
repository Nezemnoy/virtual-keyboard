const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


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
  ],
 },
 devServer: {
    static: './dist',
    port:3802
  },
};