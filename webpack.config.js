const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }, 
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: 'source-map-loader'
      }
    ]
  },
  devServer: {
    contentBase: ['./'],
    watchContentBase: true,
    port: 3020,
    open: true
  }
};