import database from './database'
const { Pool } = require('pg')

exports.getUsers = function () {
  const pool = new Pool(database)
  pool.connect()
  return pool.query('SELECT * FROM alpha_profiler.users')
    .then(pool.end)
}
exports.getUser = function (id) {
  const pool = new Pool(database)
  pool.connect()
  return pool.query('SELECT * FROM alpha_profiler.users WHERE id=$1', id)
    .then(pool.end)
}
exports.saveUser = function (user) {
  const pool = new Pool(database)
  pool.connect()
  return pool.query(
    'INSERT INTO alpha_profiler.users(username, password,email,image,date_birth)' +
    'VALUES($1,$2,$3,$4,$5)', user)
    .then(pool.end)
}
exports.deleteUser = function (id) {
  const pool = new Pool(database)
  pool.connect()
  return pool.query('DELETE FROM alpha_profiler.users WHERE id=$1', id)
    .then(pool.end)
}
exports.updateUser = function (user) {
  const pool = new Pool(database)
  pool.connect()
  return pool.query('UPDATE alpha_profiler.users' +
  'SET username=$1, password=$2, email=$3, image=$4, date_birth=$5', user)
    .then(pool.end)
}
