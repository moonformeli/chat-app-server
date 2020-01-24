const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'Application.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: ['ts-loader']
      }
    ]
  }
};
