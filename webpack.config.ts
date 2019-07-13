const path = require("path");
import { Configuration } from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config: Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ],
  devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
};

export default config;
