export const up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.specificType('id', 'CHAR(24)').primary();
    table.string('username').unique();
    table.string('password');
  });
};

export const down = function (knex) {
  return knex.schema.dropTableIfExists('users');
};
