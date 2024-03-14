import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration[] = [
  {
    mode: "development",
    target: "electron-main",
    entry: {
      electron: "/src/main/main.ts",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.join(__dirname, "/../dist/dev"),
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: "ts-loader" },
        {
          test: /.node$/,
          loader: "node-loader",
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
  },
  {
    mode: "development",
    target: "electron-renderer",
    entry: {
      frontend: "/src/renderer/index.tsx",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.join(__dirname, "/../dist/dev"),
    },
    module: {
      rules: [
        { test: /\.(ts|tsx)$/, loader: "ts-loader" },
        {
          // TODO Add CSS and Style loaders.
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: undefined,
        template: __dirname + "/../src/renderer/index.html",
      }),
    ],
  },
];

export default config;
