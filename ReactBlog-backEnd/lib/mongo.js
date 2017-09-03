var config = require('../config')
var mongoose = require('mongoose')
mongoose.connect(config.mongodb, {
  useMongoClient: true
})

var Schema = mongoose.Schema
var User = new Schema({
  name: {type: String},
  password: {type: String},
  avatar: {type: String, default: '/static/male-70.png'},
  gender: {type: String, enum: ['m', 'f', 'x'], default: 'x'},
  bio: {type: String, default: ''}
})

User.statics.findName = function (name) {
  return this.model('User').findOne({ name: name }).exec()
}

exports.UserModel = mongoose.model('User', User)
