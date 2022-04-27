const database = require('./')

exports.getUsers = function () {
  return database.query('SELECT * FROM alpha_profiler.users')
}
exports.getUser = function (id) {
  return database.query('SELECT', id)
}
exports.saveUser = function (user) {
  return database.one(
    'INSERT INTO alpha_profiler.users(username, password,email,image,date_birth)' +
    'VALUES($1,$2,$3,$4,$5)', user)
}
exports.deleteUser = function (id) {
  return database.query('DELETE FROM alpha_profiler.users WHERE id=$1', id)
}
exports.updateUser = function (user) {
  return database.query('')
}
