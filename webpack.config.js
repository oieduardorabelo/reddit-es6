var path = require('path')
var webpack

webpack = {
  entry: path.join(__dirname, '/assets/js/main.js'),
  output: {
    path: path.join(__dirname, '/public/js'),
    filename: 'main.output.js'
  },
  module: {
    loaders: [
      { test: path.join(__dirname, '/assets/js'), exclude: '/node_modules', loader: 'babel-loader' }
    ]
  }
}

module.exports = webpack
