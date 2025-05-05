import { FastifyReply } from 'fastify';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import knexfile from '../../../knexfile';
import Knex from 'knex';

const knex = Knex(knexfile.development);

export async function criarUsuario(data: any) {
  const id = uuidv4();
  const hash = bcrypt.hashSync(data.senha, 10);

  try {
    await knex('users').insert({ ...data, senha: hash, id });
    return { status: 201, data: { mensagem: 'Usuário criado com sucesso' } };
  } catch (err) {
    return { status: 500, data: { mensagem: 'Erro ao criar usuário', erro: err } };
  }
}

export async function verificarUsuarioSenha(email: string, senha: string, reply: FastifyReply) {
  const user = await knex('users').where({ email }).first();

  if (!user || !bcrypt.compareSync(senha, user.senha)) {
    return { status: 401, data: { mensagem: 'Credenciais inválidas' } };
  }

  const token = reply.jwtSign({ id: user.id, email: user.email });
  return { status: 200, data: { token } };
}

export async function listarUsuarios() {
  try {
    const usuarios = await knex('users').select('*');
    return { status: 200, data: usuarios };
  } catch (err) {
    return { status: 500, data: { mensagem: 'Erro ao listar usuários', erro: err } };
  }
}