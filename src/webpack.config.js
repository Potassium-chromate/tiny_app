// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  // Other configurations here...

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your index.html file
      inlineSource: '.(js|css)$' // Inlines JavaScript and CSS files
    }),
    new HtmlWebpackInlineSourcePlugin() // Add the plugin here
  ]
};
