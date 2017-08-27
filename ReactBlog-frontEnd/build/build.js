/**
 * Created by 47166 on 2017/7/31.
 */
require('shelljs/global')
env.NODE_ENV = 'production'

var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./../webpack.config')

console.log("Hey, man, it will beginning configure your project...")

var spinner = ora({
  text: 'building your cool project',
  spinner: 'monkey',
  color: 'magenta',
  stream: process.stderr,
  enabled: false
})
spinner.start()

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
      colors: true,
      progress: true
    }) + '\n')
})


