// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
  },
};
