import knex, { Knex } from 'knex';
import knexConfig from 'knexfile';
import { Model } from 'objection';

export const db: Knex = knex(knexConfig[process.env.NODE_ENV || 'development']);
Model.knex(db);

export const runDBMigrations = async () => {
  await db.migrate.latest();
};
