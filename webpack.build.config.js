const path = require('path');
const webpack = require('webpack');
const devConfig = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

let config = {
  entry: {
    app: './src/index',
    vendor: devConfig.entry.vendor
  },
  resolve: {alias: {}},
  output: {
    path: path.join(__dirname, 'dist/vendor'),
    filename: 'bundle.js',
    publicPath: './vendor/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'TARGET_ENV': JSON.stringify(process.env.TARGET_ENV)
      },
      "require.specified": "require.resolve"
    }),
    new ExtractTextPlugin({filename: "styles.css", allChunks: true }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true }, safe: true }],
      },
      canPrint: false
    }),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma: 6
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),
    new HtmlWebpackPlugin({
      hash: true,
      title: "Demo Apps",
      template: `index.ejs`,
      filename: path.join(__dirname, 'dist/index.html')
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'public/images/'),
        to: path.join(__dirname, 'dist/images')
      },
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime', 'transform-async-to-generator'],
          presets: ["es2015", "react", "stage-0"]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          allChunks: true,
          publicPath: "../vendor/"
        })

      },
      {
        test: /\.(png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(eot|com|json|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  }
};

module.exports = config;
