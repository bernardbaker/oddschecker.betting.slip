/* eslint-disable */
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './app.js'],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  devServer: {
    proxy: {
      '/decimalOddsMoreThanTwo': 'http://localhost:3000',
      '/decimalOddsLessThanTwo': 'http://localhost:3000'
    }
  }
}

// This will make the redux-simpler-router module resolve to the
// latest src instead of using it from npm. Remove this if running
// outside of the source.
var src = path.join(__dirname, '..', '..', 'src')
var fs = require('fs')
if (fs.existsSync(src)) {
  // Use the latest src
  module.exports.resolve = { alias: { 'react-router-redux': src } }
  module.exports.module.loaders.push({
    test: /\.js$/,
    loaders: ['babel'],
    include: src
  });
}