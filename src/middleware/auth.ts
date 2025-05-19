import { FastifyRequest, FastifyReply } from 'fastify';

// Extend FastifyRequest to include the user property
declare module 'fastify' {
  interface FastifyRequest {
	user?: {
	  id: number;
	};
  }
}
import jwt from 'jsonwebtoken';
import {env} from "../env";
import {Tables} from "knex/types/tables";

type User = Tables["users"];

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
	try {
		const authHeader = request.headers.authorization;

		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return reply.status(401).send({ message: 'Token não fornecido' });
		}

		const token = authHeader.split(' ')[1];

		const decoded = jwt.verify(token, env.JWT_SECRET) as { id_usuario: number };

		// Você pode armazenar os dados do usuário no request para reutilizar nas rotas
		request.user = {
			id: decoded.id_usuario,
		};
	} catch (error) {
		return reply.status(401).send({ message: 'Token inválido ou expirado' });
	}
}