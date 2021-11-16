const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = function (env, argv) {
  const isProd = argv.mode === 'production'
  const isDev = !isProd

  const config = {
    mode: isProd ? 'production' : 'development',
    devtool: isDev ? 'cheap-module-source-map' : undefined,
    entry: './src/index.js',
    output: {
      filename: 'assets/js/[name].[contenthash:8].js',
      publicPath: '/',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              envName: isProd ? 'production' : 'development'
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      compress: true,
      historyApiFallback: true,
      open: true,
      client: {
        overlay: true,
        logging: 'info',
        progress: true,
        reconnect: true
      }
    }
  }

  return config
}
