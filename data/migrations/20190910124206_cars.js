
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table){
      table.increments();
      table.string('make').notNullable();
      table.string('carModel').notNullable();
      table.string('vin').notNullable().unique();
      table.integer('mileage').notNullable();
      table.string('transmission');
      table.string('titleStatus');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
