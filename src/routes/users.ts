import {FastifyInstance} from "fastify";
import {db} from "../database";
import {z} from "zod";
import crypto from "crypto";

export async function usersRoutes(app: FastifyInstance) {


	app.get("/:id", async (request) => {
		const getUserParams = z.object({
			id: z.string().uuid(),
		});

		const {id} = getUserParams.parse(request.params);

		const user = await db("users").where("id", id).first();

		return {user};
	});

	app.post("/", async (request, replay) => {
		const createTransactionBody = z.object({
			tittle: z.string(),
			value: z.number(),
			type: z.enum(["credit", "debit"]),
		});

		const {tittle, value, type} = createTransactionBody.parse(request.body);

		await db("transations").insert({
			id: crypto.randomUUID(),
			tittle,
			value: type === "credit" ? value : value * -1,
		});

		return replay.status(201).send();
	});
}
