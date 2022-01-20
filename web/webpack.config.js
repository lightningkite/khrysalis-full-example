const path = require('path');
const webpack = require('webpack')
const CopyPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const zlib = require("zlib");

module.exports = {
  entry: './src/index.ts',
  // devtool: 'inline-source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      API_URL: 'http://localhost:8000/',
      WEBSOCKET_URL: 'ws://localhost:8000/api/v2/ws/?token=',
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    new BundleAnalyzerPlugin({ analyzerMode: "static"}),
  ],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 'resolve-url-loader',
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(yaml|ogg|mp3|png|jpg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.html', '.scss']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: './dist',
      publicPath: process.env.DEV_PUBLIC_PATH || '/',
    },
    host: process.env.DEV_HOST || '127.0.0.1',
    port: process.env.DEV_PORT || '8080',
  }
};
