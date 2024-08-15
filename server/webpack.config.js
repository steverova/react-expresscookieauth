import path from "node:path";
import TerserPlugin from "terser-webpack-plugin";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  target: "node",
  entry: "./app.js", // Usa la extensión .cjs
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.mjs',
    libraryTarget: 'module',
    module: true, 
    chunkFormat: 'module',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  mode: "production",
  experiments: {
    outputModule: true,
  },
  externals: [
    nodeExternals(),
    {
      fs: "{}",
      nock: "commonjs nock",
      "@mapbox": "commonjs @mapbox",
      "aws-sdk": "commonjs aws-sdk",
      "mock-aws-s3": "commonjs mock-aws-s3",
    },
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.cs$/,
        use: "ignore-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
    mainFields: ["module", "main"],
  },
};
