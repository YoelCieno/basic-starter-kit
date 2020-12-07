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
        test: /\.(png|jpg|gif|html)$/,
        use: [
          {
            enforce: 'pre',
            test: /\.js$/,
            use: 'source-map-loader'
          },
          {
            loader: 'file-loader',
            options: {
              name: 'index.html'
            }
          }
        ]
      },    
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },      
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          'source-map-loader', 
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env']
            }
          }
        ]
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