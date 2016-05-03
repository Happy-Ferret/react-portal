var webpack = require('webpack');

var entries = {
  'react-portal': './src/index.js',
};

var plugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': process.env.NODE_ENV === 'production' ? false : true,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'dev')
    }
  })
];
if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  }));
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  plugins.push(new webpack.NoErrorsPlugin());
  entries['portal-demo'] = './src/demo/index.js';
}

module.exports = {
  output: {
    path: './dist/',
    publicPath: '/dist/',
    filename: '[name].js',
    library: 'ReactPortal',
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: './public/',
  },
  entry: entries,
  resolve: {
    extensions: ['', '.js', '.jsx', 'es6']
  },
  module: {
    loaders: [
      {
        test: /\.js|\.jsx|\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: plugins
};
