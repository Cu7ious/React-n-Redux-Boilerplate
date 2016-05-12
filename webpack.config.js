module.exports = {
  entry: [
    './app/core.js'
  ],

  output: {
    path: './assets/js',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: process.env.PORT
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
