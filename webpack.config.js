module.exports = {
  module: {
    rules: [
      { test: /\.html$/, loader: 'raw-loader' },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: [ 'env' ] }
      }
    ]
  }
}
