module.exports = function (app) {
  app.get('/', (req, res) => {
    let sendString = req.query.name ? `<h3 style="color: skyblue">你的登录名为 ${req.query.name}</h3>` : `请输入您的用户名`
    res.send(sendString)
  })

  app.use('/api/signIn', require('./signin'))
  app.use('/api/register', require('./register'))
}
