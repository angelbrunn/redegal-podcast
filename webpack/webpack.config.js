const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const Modes = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
};

module.exports = (env, { mode }) => {
  const isProduction = mode === Modes.PRODUCTION;

  console.log(__dirname)

  return {
    mode,
    entry: path.join(__dirname, "../src/index.tsx"),
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jp(e*)g|gif|webp|avif)$/,
          use: ["file-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "[name].[hash].bundle.js",
      chunkFilename: "[name].[hash].bundle.js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "../src/index.html"),
        favicon: path.join(__dirname, "../src/assets/images/favicon.ico"),
      }),
    ],

    performance: {
      maxEntrypointSize: Infinity,
      maxAssetSize: 1024 ** 2,
    },

    devtool: isProduction ? "source-map" : "inline-source-map",

    devServer: {
      host: "0.0.0.0",
      port: 3000,
    },
  };
};
