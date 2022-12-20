exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', table => {
    table.incriments()
    table.string('vin', 17).notNullable().unique()
    table.string('make', 120).notNullable()
    table.string('model', 120).notNullable()
    table.numberic('mileage').unsigned().notNullable()
    table.string('title').notNullable()
    table.string('transmission').notNullable()
  })
};

exports.down = async function(knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars')
};
