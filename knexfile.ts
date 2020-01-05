// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "postgres",
      user: "postgres",
      password: "postgres"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      extension: 'ts',
      directory: './db/migrations',
      tableName: "knex_migrations",
    },
    seeds: {
      extension: 'ts',
      directory: './db/seeds',
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      extension: 'ts',
      directory: './db/migrations',
      tableName: "knex_migrations",
    },
    seeds: {
      extension: 'ts',
      directory: './db/seeds',
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      extension: 'ts',
      directory: './db/migrations',
      tableName: "knex_migrations",
    },
    seeds: {
      extension: 'ts',
      directory: './db/seeds',
    },
  },
};
