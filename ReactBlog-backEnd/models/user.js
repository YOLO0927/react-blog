var User = require('../lib/mongo').UserModel

module.exports = {
  testUserName (username) {
    return User.findName(username).then( (data) => {
      return data
    } )
  },
  register (userInfo) {
    return User.create(userInfo, function (err) {
      return err ? err : true
    })
  },
  getUserByName (userInfo) {
    return User.findOne(userInfo).lean().then( (data) => {
      return data ? data : false
    } )
  }
}
