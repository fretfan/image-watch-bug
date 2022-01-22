const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  // devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    clean: true,
  },
  module: {
    rules: [
      //  {
      //   test: /\.html$/,
      //   use: [
      //     { loader: 'html-loader' }
      //   ]
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'img/[name].[hash][ext][query]',
        // }
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};