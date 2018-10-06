let path = require('path');
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let port = 8080;

let config = {
  entry: {
    app: [
      `webpack-dev-server/client?http://localhost:${port}`,
      'webpack/hot/only-dev-server',
      './src/index',
    ],
    vendor: "vendors"
  },
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin({filename: "styles.css", allChunks: true }),
    new webpack.HotModuleReplacementPlugin(),

    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      "require.specified": "require.resolve"
    })
  ],
  module: {
    noParse: "/node_modules\/localforage\/dist\/localforage.js/",
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime', 'transform-async-to-generator'],
          presets: ["react", "es2015", "stage-0", "react-hmre"]
        }
      },
      {
        test: /\.css$/,
        loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }))
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
