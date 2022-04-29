const { getClient } = require('../utils/clientPG')
const {
  createQuery,
  selectQuery,
  updateQuery,
  deleteQuery
} = require('../utils/querys')

class Model {
  constructor (table, userId) {
    this.table = table
    this.userId = userId
  }

  async getList (filters = {}) {
    const client = await getClient()
    const result = await selectQuery(client, this.table, filters)
    await client.end()
    return result
  }

  async create (body) {
    const client = await getClient()
    console.log('lalala', body)
    const result = await createQuery(client, this.table, body, this.userId)
    await client.end()
    return result[0]
  }

  async update (id, body) {
    const client = await getClient()
    const result = await updateQuery(client, this.table, id, body, this.userId)
    await client.end()
    return result[0]
  }

  async delete (id) {
    const client = await getClient()
    const result = await deleteQuery(client, this.table, id, this.userId)
    await client.end()
    return result[0]
  }
}

module.exports = Model
