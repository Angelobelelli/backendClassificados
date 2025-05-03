import Fastify from 'fastify';
import { db } from './database';
import { env } from './env';

const app = Fastify();

app.get('/usuarios', async (request, reply) => {
  try {
    const users = await db('users').select('*');
    return users;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return reply.status(500).send({ error: 'Erro interno no servidor' });
  }
});

app.listen({ port: env.APP_PORT }, () => {
  console.log(`Server listening on port ${env.APP_PORT}`);
});
