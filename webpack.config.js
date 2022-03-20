const webpack = require("webpack");
const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// import './src/i'
const isProduction = process.env.NODE_ENV === "production";

const cMapsDir = path.join(
  path.dirname(require.resolve("pdfjs-dist/package.json")),
  "cmaps"
);

module.exports = {
  mode: isProduction ? "production" : "development",
  bail: isProduction,
  context: path.join(__dirname),
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: ["babel-loader"],
      },
      {
        test: /\.pdf$/i,
        type: "asset/resource",
        generator: {
          filename: `[name][ext]`,
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/sample.pdf" },
        { from: cMapsDir, to: "cmaps/" },
      ],
    }),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true, // respond to 404s with index.html
    host: "localhost",
    hot: true, // enable HMR on the server
    port: 3000,
  },
};
