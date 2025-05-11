import Fastify from 'fastify';
import { userRoutes } from './routes/userRoutes';
import { productRoutes } from './routes/productRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = Fastify();

app.register(userRoutes);
app.register(productRoutes);

app.listen({ port: 3333 }, (err, address) => {
  if (err) throw err;
  console.log(`Server running on 3333`);
});
