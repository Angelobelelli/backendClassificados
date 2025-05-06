
# 📦 Fastify + TypeScript + Knex – Guia Estruturado

## 1. 🚀 Configuração Inicial do TypeScript

```bash
npm i -D typescript               # Instala o TypeScript
npx tsc --init                    # Gera tsconfig.json
npm i -D @types/node              # Tipos para o Node.js
npm i tsx -D                      # Executar TS sem gerar JS
npx tsx src/server.ts            # Executa diretamente um .ts
```

---

## 2. 🗃️ Configuração do Knex + Banco de Dados

### Instalação
```bash
npm i knex --save
```

### `src/database.ts`
```ts
export const db = knex({
  client: 'sqlite',
  connection: {
    filename: './db/app.db'
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations'
  }
});
```

### `knexfile.ts`
```ts
import { db } from './src/database';
export default db;
```

---

## 3. ✅ Validação com Zod (Inputs e Ambientes)

### Requisições
```ts
const createTransactionBody = z.object({
  title: z.string(),
  value: z.number(),
  type: z.enum(['credit', 'debit']),
});

const { title, value, type } = createTransactionBody.parse(request.body);
```

### Variáveis de Ambiente
```ts
DATABASE_URL: z.string(),
NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
```

---

## 4. 🔁 Rotas de Transações

### Listagem de Todas as Transações
```ts
app.get('/', async () => {
  // Retorna todas as transações
});
```

### Buscar por ID
```ts
app.get('/:id', async (request) => {
  // Buscar por ID com validação Zod
});
```

### Resumo de Transações
```ts
app.get('/summary', async () => {
  // Soma os valores e retorna: { amount }
});
```

Consulta com Knex:
```ts
.select(knex.fn.sum('value').as('amount'))
```

---

## 5. ➕ Criando uma Nova Transação

```ts
await db('transactions').insert({
  id: crypto.randomUUID(),
  title,
  value: type === 'credit' ? value : value * -1
});
```

Resposta:
```ts
return reply.status(201).send();
```

---

## 6. 📦 Compilação Manual (se necessário)

```bash
npx tsc src/index.ts             # Compila para .js
node dist/index.js               # Executa o JS compilado
```
