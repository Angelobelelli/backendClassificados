import { FastifyInstance } from 'fastify';
import { createUser, loginUser, listUsers } from '../controllers/usuario.controller';

export default async function usuarioRoutes(app: FastifyInstance) {
  app.post('/usuarios', createUser);
  app.post('/login', loginUser);
  app.get('/usuarios', listUsers);
}