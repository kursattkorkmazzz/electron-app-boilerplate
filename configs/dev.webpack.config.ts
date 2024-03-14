import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration[] = [
  {
    mode: "development",
    target: "electron-main",

    entry: {
      electron: "/src/main/main.ts",
      preload: "/src/main/preload.ts",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.join(__dirname, "/../dist/dev"),
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: "ts-loader", exclude: /node_modules/ },
        {
          test: /.node$/,
          loader: "node-loader",
          exclude: /node_modules/,
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
        { test: /\.(ts|tsx)$/, loader: "ts-loader", exclude: /node_modules/ },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".css"],
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
