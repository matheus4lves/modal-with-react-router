const path = require("path");
const { merge } = require("webpack-merge");
const parts = require("./webpack.parts");

const commonConfig = merge([
  {
    context: path.resolve(__dirname, "app"),
    entry: "/index.js",
    output: {
      path: path.resolve(__dirname, "./build"),
      publicPath: "/",
      filename: "bundle.js",
    },
  },
  parts.generateHTML(),
  parts.transpileJavaScript(),
  parts.loadCSS(),
]);

const configs = {
  development: merge([]),
  production: merge([]),
};

module.exports = (_env, argv) =>
  merge([commonConfig, configs[argv.mode], { mode: argv.mode }]);
