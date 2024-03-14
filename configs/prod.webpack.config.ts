import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration[] = [
  {
    mode: "production",
    target: "electron-main",

    entry: {
      electron: "/src/main/main.ts",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.join(__dirname, "/../dist/prod"),
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
    mode: "production",
    target: "electron-renderer",
    entry: {
      frontend: "/src/renderer/index.tsx",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.join(__dirname, "/../dist/prod"),
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
