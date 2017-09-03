var express = require('express')
var router = express.Router()
var textToJson = require('../middlewares/textToJson')
var userModel = require('../models/user')

// 注册的 post 方法
router.post('/', (req, res) => {
  textToJson(req).then((reqBody) => {
    if (!reqBody.password) {
      userModel.testUserName(reqBody.username).then((data) => {
        res.json({
          message: data ? '用户名已存在' : '用户名不存在',
          data: data ? true : false
        })
      })
    } else {
      userModel.register({
        name: reqBody.username,
        password: reqBody.password
      }).then((data) => {
        if (data) {
          res.json({
            message: '操作成功',
            data: true
          })
        } else {
          res.json({
            message: '操作失败',
            data: data
          })
        }
      })
    }
  })
})

// 登录的 post 方法

module.exports = router
