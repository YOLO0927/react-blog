var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer');
var routes = require('./routes')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

var server = app.listen(9309, () => {
  let host = server.address().address
  let port = server.address().port

  console.log(`正在监听 ${host} , 端口号为 ${port}`)
})
