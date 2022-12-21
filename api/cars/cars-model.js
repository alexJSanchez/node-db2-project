const knex = require("knex");
const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  return db("cars");
};

const getById = (id) => {
  // DO YOUR MAGIC
  return db("cars").where("id", id).first();
};

const create = (payload) => {
  // DO YOUR MAGIC
  return db("cars").insert(payload).then(([id])=>{
    return getById(id)
  });
};

const getVin = (vin) => {
  return db('cars').where('vin', vin).first()
}
module.exports = { getAll, getById, create, getVin };
