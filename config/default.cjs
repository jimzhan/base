const path = require('path');

module.exports = {
  host: '0.0.0.0',
  port: 8000,

  db: {
    debug: true,
    client: 'mysql2',
    asyncStackTraces: true,
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'funbox',
      database: 'funbox',
      password: 'funbox',
      charset: 'utf8mb4',
    },
    pool: {
      min: 3,
      max: 5,
    },
    migrations: {
      tableName: 'migrations',
      directory: path.join(__dirname, '../data/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '../data/seeds'),
    },
  },
};
