import { FastifyInstance } from 'fastify';
import { UserController } from '../controllers/UserController';

export async function userRoutes(fastify: FastifyInstance) {
  fastify.get('/users', UserController.index);
  fastify.get('/users/:id', UserController.show);
  fastify.post('/users', UserController.store);
  fastify.delete('/users/:id', UserController.destroy);
  fastify.post('/login', UserController.login)
}
