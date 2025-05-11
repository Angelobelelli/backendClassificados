import { FastifyInstance } from 'fastify';
import { ProductController } from '../controllers/ProductController';

export async function productRoutes(fastify: FastifyInstance) {
  fastify.get('/products', ProductController.index);
  fastify.get('/products/:id', ProductController.show);
  fastify.post('/products', ProductController.store);
  fastify.delete('/products/:id', ProductController.destroy);
}
