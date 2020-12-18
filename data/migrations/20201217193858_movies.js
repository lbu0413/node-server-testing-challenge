
exports.up = function(knex) {
    return knex.schema.createTable('movies', table => {
        table.increments();
        table.string('name', 255).unique().notNullable()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('movies')
};
