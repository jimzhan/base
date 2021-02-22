export const up = (knex) => knex.schema.createTable('users', (table) => {
  table.specificType('id', 'CHAR(24)').primary()
  table.string('username').unique()
  table.string('password')
})

export const down = (knex) => knex.schema.dropTableIfExists('users')
