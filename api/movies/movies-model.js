const db = require('../../data/dbConfig.js')

module.exports = {
  insert,
  update,
  remove,
  getAll,
  getById,
}

function getAll() {
  return db('movies')
}

function getById(id) {
  return null
}

async function insert(movie) {
  // 2 - implement the code that makes the test pass
  const [id] = await db('movies').insert(movie)
  return db('movies').where({ id }).first()
}

async function update(id, changes) {
  await db('movies').update(changes).where({ id })
  return db('movies').where({ id }).first()
}

async function remove(id) {
  await db('movies').where({ id }).delete()
  return db('movies')
}
