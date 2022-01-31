const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
    open: true,

    // makes server accessible externally via `your-ip:8080`
    // tip: get ip with `ip address | grep 192.168.`
    // host: "0.0.0.0",
  }
});
