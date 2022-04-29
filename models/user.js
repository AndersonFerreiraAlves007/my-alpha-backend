const Model = require('../templates/model')

class User extends Model {
  constructor () {
    super('users')
  }
}

module.exports = User
