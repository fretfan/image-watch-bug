const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const path = require('path');

module.exports = {
  // devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext][query]',
        }
      },
    ],
  },

  plugins: [
    new HtmlBundlerPlugin({
      entry: {
        // define all HTML templates here, the syntax is the same as Webpack entry
        index: './src/index.html', // => dist/index.html
        //'pages/about': 'src/views/about/index.html', // output dist/pages/about.html
      },
      js: {
        filename: 'js/[name].[contenthash:8].js', // output filename of extracted JS
      },
      css: {
        filename: 'css/[name].[contenthash:8].css', // output filename of extracted CSS
      }
    }),
  ],
};