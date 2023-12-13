// webpack.config.js
const path = require('path');

module.exports = {
  // ...other configuration
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Include .tsx, .ts, and .js extensions
  },
  // ...other configuration
};
