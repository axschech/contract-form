const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/app.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-object-rest-spread"]
        }
      },
      {
        test: /\.css$/,
        use: [
            "css-loader", "style-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  output: {
    publicPath: '/dist/',
    path: path.resolve('dist'),
    filename: 'app.min.js'
  },
  devServer: {
    index: './index.html',
    host: 'localhost',
    port: '9001',
    hot: true,
    inline: true,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};