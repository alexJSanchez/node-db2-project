const knex = require('knex')
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './data/dealer.db3'
  },
  useNullAsDefault: true
});

const getAll = () => {
  // DO YOUR MAGIC
  return db('cars')
}

const getById = () => {
  // DO YOUR MAGIC
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = { getAll , getById, create}