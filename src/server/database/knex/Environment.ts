import path from 'path';
import { Knex } from 'knex';

export const development: Knex.Config = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'database.sqlite'
    ),
  },
  migrations: {
    directory: path.resolve(__dirname, '..', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, '..', 'seeds'),
  },
  pool: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    afterCreate: (conn: any, done: (err?: Error) => void) => {  
      conn.run('PRAGMA foreign_keys = ON');
      done();
    } 
  },
};

export const test: Knex.Config = {
  ...development,
  connection: ':memory:',
};

export const production: Knex.Config = {
  ...development,
};
