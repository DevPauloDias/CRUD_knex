var knex = require('knex')({
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'postgres',
      password : 'dwpq2jnza4',
      database : 'libert_testes'
    }
  });
  module.exports = knex