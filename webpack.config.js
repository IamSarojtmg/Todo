const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map", //help find out the location of the error.
  devServer: {
    static: "./dist",
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // }, // no need for this as we only have a single file.

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
