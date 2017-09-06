var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var config = require('./config')
var env = process.env.NODE_ENV

process.noDeprecation = true
var outputFileName
var plugins = [
  new HtmlWebpackPlugin({
    title: '随记',
    template: path.resolve(__dirname, 'templates/index.ejs'),
    inject: 'body',
    favicon: './images/react-logo.jpg',
    config: env === 'production' ? config.build : config.dev
  }),
  new webpack.HotModuleReplacementPlugin()
]
if (env === 'production') {
  var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
  plugins.push(new UglifyJsPlugin({
    minimize: true
  }))
  outputFileName = '[name].build.min.js'
} else {
  outputFileName = '[name].js'
}

module.exports = {
  entry: {
    fetch: 'whatwg-fetch',
    app: './src/app.js'
  },   // webpack 入口文件组
  output: {
    path: path.resolve(__dirname, 'dist'),  // 利用 path 包合并当前目录地址下的 dist 文件夹
    filename: outputFileName,
    publicPath: '/'
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, './src')],
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        query: {
          interpolate : '\\{\\{(.+?)\\}\\}',
          evaluate : '\\[\\[(.+?)\\]\\]'
        }
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.resolve(__dirname, 'dist/images/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.resolve(__dirname, 'dist/images/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: plugins,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:9309'
      }
    },
    historyApiFallback: true,
    contentBase: './dist',
    compress: true,
    inline:true,
    hot: true,
    stats: {
      colors: true
    },
    port: 3000,
    open: false
  },
  devtool: env === 'production' ? 'source-map' : false
}
