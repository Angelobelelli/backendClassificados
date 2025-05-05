import fp from 'fastify-plugin';
import knexfile from '../../knexfile';
import Knex from 'knex';

export const knex = fp(async (fastify, opts) => {
  const db = Knex(knexfile.development);
  fastify.decorate('knex', db);
});