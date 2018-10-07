let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.dev.config');

const port = 8080;

return new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  inline: true,
  stats: {colors: true},
  contentBase: "public/",
  open: true,
}).listen(port, 'localhost', function(error) {
  if (error) {
    return console.log(error);
  }
  console.log(`Server running at http://localhost:${port}/`);
});

