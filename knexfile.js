module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost:/kaylas_byob'
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }
  };