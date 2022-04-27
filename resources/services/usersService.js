const usersData = require('../data/usersData')

exports.getUsers = function () {
  return usersData.getUsers()
}
exports.getUser = function (id) {
  return usersData.getUser(id)
}
exports.saveUser = function (user) {
  return usersData.saveUser(user)
}
exports.deleteUser = function (id) {
  return usersData.deleteUser(id)
}
exports.updateUser = function (user) {
  return usersData.updateUser(user)
}
