module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/main.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
}

