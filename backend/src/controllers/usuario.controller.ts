import { FastifyRequest, FastifyReply } from 'fastify';
import { criarUsuario, verificarUsuarioSenha, listarUsuarios } from '../models/usuario.model';

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  const response = await criarUsuario(request.body);
  reply.code(response.status).send(response.data);
}

export async function loginUser(request: FastifyRequest, reply: FastifyReply) {
  const { email, senha } = request.body as any;
  const response = await verificarUsuarioSenha(email, senha, reply);
  reply.code(response.status).send(response.data);
}

export async function listUsers(request: FastifyRequest, reply: FastifyReply) {
  const response = await listarUsuarios();
  reply.code(response.status).send(response.data);
}