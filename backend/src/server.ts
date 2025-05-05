import Fastify from 'fastify';
import jwt from '@fastify/jwt';
import usuarioRoutes from './routes/usuario.routes';
import { knex } from './plugins/knex';

const app = Fastify();

app.register(jwt, {
  secret: process.env.JWT_SECRET || 'supersecret'
});

app.register(knex);
app.register(usuarioRoutes);

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});