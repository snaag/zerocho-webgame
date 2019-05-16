const path = require('path');

module.exports = {
  name: 'word-relay-dev',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
            '@babel/preset-react',
        ],
        plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-proposal-class-properties'
        ],
      },
      exclude: path.join(__dirname, 'node_modules'),
    }],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist',
  },
};