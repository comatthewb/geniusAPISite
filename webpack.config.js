const path = require('path');
const SRC_DIR = path.join(__dirname, "/src");
const DIST_DIR = path.join(__dirname, "/dist");

module.exports = {
  entry: `/${SRC_DIR}/index.js`,
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  },
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
};