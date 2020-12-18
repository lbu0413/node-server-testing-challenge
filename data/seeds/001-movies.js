exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('movies')
    .truncate()
    .then(function() {
      return knex('movies').insert([
        { name: 'inception' },
        { name: 'harry potter' },
        { name: 'lord of the rings' },
        { name: 'iron man' },
      ]);
    });
};
