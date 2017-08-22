var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var loaders = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel-loader",
    "query": {
      "presets": [
        "es2015",
        "stage-0",
        "stage-2"
      ],
      "plugins": []
    }
  },
  {
    "test": /\.ts$/,
    "exclude": /node_modules|vue\/src/,
    "loader": "ts-loader",
    "options": {
      "appendTsSuffixTo": [/\.vue$/]
    }
  },
  {
    "test": /\.vue?$/,
    "loader": "vue-loader"
  },
  {
    "test": /\.css$/,
    "loader": "style!css!less"
  }
];

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  entry: path.resolve('src', 'main.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'build.js',
    publicPath: '/'
  },
  module: {
    rules: loaders
  },
  /*vue: {
      loaders: {
          css: ExtractTextPlugin.extract("css"),
          // you can also include <style lang="less"> or other langauges
          less: ExtractTextPlugin.extract("css!less")
      }
  },*/
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //     minimize: true,
    //     compress:{
    //         warnings: false,
    //         drop_debugger: true,
    //         drop_console: true
    //     }
    // }),
    // new ExtractTextPlugin("vue_style.css")
  ],
  watch: true,
  // esModule: true
};
