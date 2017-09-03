var User = require('../lib/mongo').UserModel

module.exports = {
  testUserName (username) {
    return User.findName(username).then( (data) => {
      return data
    } )
  },
  register (userInfo) {
    return User.create(userInfo, function (err) {
      if (err) {
        return err
      } else {
        return true
      }
    })
  },
  getUserByName (userInfo) {
    return User.findOne(userInfo).then( (data) => {
      return data ? true : false
    } )
  }
}
