const webpack = require('webpack')
const merge = require('webpack-merge');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json'],
        include: PATHS.app
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      stats: 'errors-only',

      host: process.env.HOST || '0.0.0.0',
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}