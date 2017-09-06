var express = require('express')
var router = express.Router()
var textToJson = require('../middlewares/textToJson')
var userModel = require('../models/user')

// 登录的 post 方法
router.post('/', (req, res) => {
  textToJson(req).then((reqBody) => {
    userModel.getUserByName({
      name: reqBody.username,
      password: reqBody.password
    }).then((data) => {
      delete data.password
      res.json({
        message: `操作成功`,
        code: `0`,
        data: data
      })
    })
  })
})

// 登录的 post 方法

module.exports = router
