var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer');
var config = require('./config')
var routes = require('./routes')

var app = express()
app.use('/static', express.static('./static'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

var server = app.listen(config.port, () => {
  let host = server.address().address
  let port = server.address().port

  console.log(`正在监听 ${host} , 端口号为 ${port}`)
})
