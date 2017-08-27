var express = require('express')
var router = express.Router()
var textToJson = require('../middlewares/textToJson')

// 登录的 post 方法
router.post('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  textToJson(req).then((reqBody) => {
    res.json({
      message: `登录成功`,
      code: `0`,
      data: {
        name: reqBody.username
      }
    })
  })
})

// 登录的 post 方法

module.exports = router
