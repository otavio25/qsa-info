module.exports = {
  client: 'pg',
  connection: {
    host : '172.18.0.3',
    user : 'postgres',
    password : 'postgres',
  },

  migrations: {
    tableName: 'knex_migrations'
  }
};